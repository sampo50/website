/**
 * Pricing Diagnostic Modal — UI component (uses pricingDiagnostic.js for logic)
 */
(function () {
	'use strict';

	var getRecommendation =
		window.PricingDiagnostic && window.PricingDiagnostic.getRecommendation;

	var STEPS = [
		{
			id: 'industry',
			question: 'Millä toimialalla yrityksesi toimii?',
			options: [
				{ value: 'hospitality', label: 'Hospitality / serviced apartments / flexible living' },
				{ value: 'coworking', label: 'Coworking / tilapalvelut' },
				{ value: 'saas', label: 'SaaS / digitaaliset tuotteet' },
				{ value: 'services', label: 'Asiantuntijapalvelut / konsultointi' },
				{ value: 'ecommerce', label: 'Verkkokauppa / fyysiset tuotteet' },
				{ value: 'other', label: 'Muu' }
			]
		},
		{
			id: 'size',
			question: 'Minkä kokoinen yritys on?',
			options: [
				{ value: 'micro', label: 'Alle 1 M€ liikevaihto' },
				{ value: 'small', label: '1–5 M€' },
				{ value: 'mid', label: '5–20 M€' },
				{ value: 'large', label: '20 M€+' },
				{ value: 'unknown', label: 'En halua sanoa' }
			]
		},
		{
			id: 'pain',
			question: 'Mikä on selkein hinnoittelun kipukohta?',
			options: [
				{ value: 'underpricing', label: 'Emme tiedä, veloitammeko liian vähän' },
				{ value: 'intuition', label: 'Hinnoittelu perustuu liikaa tuntumaan tai kilpailijoihin' },
				{ value: 'discounting', label: 'Alennukset syövät katetta' },
				{ value: 'packaging', label: 'Paketointi on epäselvää' },
				{ value: 'sales_confidence', label: 'Myynti ei osaa perustella hintaa' },
				{ value: 'capacity', label: 'Kapasiteetti tai käyttöaste vaihtelee liikaa' },
				{ value: 'channels', label: 'Kanavat tai jakelu syövät katetta' },
				{ value: 'model', label: 'Tarvitsemme selkeämmän hinnoittelumallin' }
			]
		}
	];

	var state = { step: 0, answers: {}, previousFocus: null };
	var modal, dialog, progressEl, bodyEl;

	function escapeHtml(str) {
		return String(str)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	}

	function createModal() {
		if (document.getElementById('diagnostic-modal')) {
			modal = document.getElementById('diagnostic-modal');
			dialog = modal.querySelector('.diagnostic-dialog');
			progressEl = document.getElementById('diagnostic-progress');
			bodyEl = document.getElementById('diagnostic-body');
			return;
		}

		modal = document.createElement('div');
		modal.id = 'diagnostic-modal';
		modal.className = 'diagnostic-modal';
		modal.hidden = true;
		modal.innerHTML =
			'<div class="diagnostic-backdrop" data-diagnostic-close tabindex="-1" aria-hidden="true"></div>' +
			'<div class="diagnostic-dialog" role="dialog" aria-modal="true" aria-labelledby="diagnostic-title" aria-describedby="diagnostic-desc">' +
			'<button type="button" class="diagnostic-close" data-diagnostic-close aria-label="Sulje">&times;</button>' +
			'<p class="diagnostic-progress" id="diagnostic-progress" aria-live="polite"></p>' +
			'<div class="diagnostic-body" id="diagnostic-body"></div>' +
			'</div>';

		document.body.appendChild(modal);
		dialog = modal.querySelector('.diagnostic-dialog');
		progressEl = document.getElementById('diagnostic-progress');
		bodyEl = document.getElementById('diagnostic-body');

		modal.querySelectorAll('[data-diagnostic-close]').forEach(function (el) {
			el.addEventListener('click', closeModal);
		});
	}

	function getFocusable(container) {
		return Array.prototype.slice
			.call(
				container.querySelectorAll(
					'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
				)
			)
			.filter(function (el) {
				return !el.hidden && el.getAttribute('aria-hidden') !== 'true';
			});
	}

	function trapFocus(e) {
		if (!modal || modal.hidden || e.key !== 'Tab') return;
		var focusable = getFocusable(dialog);
		if (!focusable.length) return;
		var first = focusable[0];
		var last = focusable[focusable.length - 1];
		if (e.shiftKey && document.activeElement === first) {
			e.preventDefault();
			last.focus();
		} else if (!e.shiftKey && document.activeElement === last) {
			e.preventDefault();
			first.focus();
		}
	}

	function openModal() {
		if (!getRecommendation) {
			console.error('pricingDiagnostic.js must load before diagnostic.js');
			return;
		}
		createModal();
		state = { step: 0, answers: {}, previousFocus: document.activeElement };
		modal.hidden = false;
		document.body.classList.add('diagnostic-open');
		renderStep();
		document.addEventListener('keydown', onKeydown);
		dialog.addEventListener('keydown', trapFocus);
		var closeBtn = dialog.querySelector('.diagnostic-close');
		if (closeBtn) closeBtn.focus();
	}

	function closeModal() {
		if (!modal) return;
		modal.hidden = true;
		document.body.classList.remove('diagnostic-open');
		document.removeEventListener('keydown', onKeydown);
		if (dialog) dialog.removeEventListener('keydown', trapFocus);
		if (state.previousFocus && state.previousFocus.focus) state.previousFocus.focus();
	}

	function onKeydown(e) {
		if (e.key === 'Escape') closeModal();
	}

	function renderStep() {
		if (state.step >= STEPS.length) {
			renderResult();
			return;
		}

		var step = STEPS[state.step];
		progressEl.textContent = 'Vaihe ' + (state.step + 1) + ' / ' + STEPS.length;

		var html = '<h2 id="diagnostic-title">Tarvitsetko apua hinnoittelussa?</h2>';
		if (state.step === 0) {
			html +=
				'<p id="diagnostic-desc" class="diagnostic-intro">Vastaa kolmeen kysymykseen, niin ohjaan sinut sopivimpaan audit- tai sprinttivaihtoehtoon.</p>';
		} else {
			html += '<p id="diagnostic-desc" class="diagnostic-intro visually-hidden">Diagnostiikka</p>';
		}
		html += '<p class="diagnostic-question">' + escapeHtml(step.question) + '</p>';
		html +=
			'<div class="diagnostic-options" role="group" aria-label="' +
			escapeHtml(step.question) +
			'">';
		step.options.forEach(function (opt) {
			html +=
				'<button type="button" class="diagnostic-option" data-value="' +
				opt.value +
				'" data-field="' +
				step.id +
				'">' +
				escapeHtml(opt.label) +
				'</button>';
		});
		html += '</div>';
		if (state.step > 0) {
			html += '<button type="button" class="btn btn-secondary diagnostic-back">Takaisin</button>';
		}

		bodyEl.innerHTML = html;

		bodyEl.querySelectorAll('.diagnostic-option').forEach(function (btn) {
			btn.addEventListener('click', function () {
				state.answers[this.getAttribute('data-field')] = this.getAttribute('data-value');
				state.step += 1;
				renderStep();
			});
		});

		var back = bodyEl.querySelector('.diagnostic-back');
		if (back) {
			back.addEventListener('click', function () {
				state.step -= 1;
				renderStep();
			});
		}
	}

	function renderResult() {
		progressEl.textContent = 'Valmis';

		var rec = getRecommendation(
			state.answers.industry,
			state.answers.size,
			state.answers.pain
		);

		var html =
			'<h2 id="diagnostic-title">' +
			escapeHtml(rec.title) +
			'</h2>' +
			'<p id="diagnostic-desc" class="diagnostic-result-text">' +
			escapeHtml(rec.description) +
			'</p>';

		if (rec.intensityNote) {
			html +=
				'<p class="diagnostic-intensity-note" role="note">' +
				escapeHtml(rec.intensityNote) +
				'</p>';
		}

		html +=
			'<div class="diagnostic-result-actions">' +
			'<a class="btn btn-primary btn-lg" href="' +
			escapeHtml(rec.href) +
			'">' +
			escapeHtml(rec.cta) +
			'</a>' +
			'<button type="button" class="btn btn-secondary" data-diagnostic-close>Sulje</button>' +
			'</div>' +
			'<button type="button" class="btn btn-secondary diagnostic-back">Muokkaa vastauksia</button>';

		bodyEl.innerHTML = html;

		bodyEl.querySelector('[data-diagnostic-close]').addEventListener('click', closeModal);
		bodyEl.querySelector('.diagnostic-back').addEventListener('click', function () {
			state.step = STEPS.length - 1;
			renderStep();
		});
	}

	document.addEventListener('DOMContentLoaded', function () {
		createModal();
		document.querySelectorAll('[data-diagnostic-open]').forEach(function (trigger) {
			trigger.addEventListener('click', function (e) {
				e.preventDefault();
				openModal();
			});
		});
	});
})();
