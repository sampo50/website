(function () {

	// Mobile nav toggle
	var toggle = document.querySelector('.nav-toggle');
	var menu = document.getElementById('nav-menu');
	if (toggle && menu) {
		toggle.addEventListener('click', function () {
			var expanded = this.getAttribute('aria-expanded') === 'true';
			this.setAttribute('aria-expanded', String(!expanded));
			menu.classList.toggle('open');
		});
	}

	// Close menu on nav link click
	if (menu) {
		menu.querySelectorAll('a').forEach(function (link) {
			link.addEventListener('click', function () {
				if (menu.classList.contains('open')) {
					menu.classList.remove('open');
					toggle && toggle.setAttribute('aria-expanded', 'false');
				}
			});
		});
	}

	// Sticky CTA: show on mobile after hero, hide near final CTA
	var stickyCta = document.getElementById('sticky-cta');
	var hero = document.querySelector('.hero');
	var finalCta = document.getElementById('varaa');

	if (stickyCta && hero && window.matchMedia('(max-width: 768px)').matches) {
		var showSticky = function () {
			var heroBottom = hero.getBoundingClientRect().bottom;
			var pastHero = heroBottom < 0;
			var atFinalCta = false;
			if (finalCta) {
				var rect = finalCta.getBoundingClientRect();
				atFinalCta = rect.top < window.innerHeight * 0.6;
			}
			var visible = pastHero && !atFinalCta;
			stickyCta.hidden = !visible;
			document.body.classList.toggle('has-sticky-cta', visible);
		};
		showSticky();
		window.addEventListener('scroll', showSticky, { passive: true });
		window.addEventListener('resize', showSticky, { passive: true });
	}

	// Smooth scroll for same-page anchor links only
	document.querySelectorAll('a[href^="#"]').forEach(function (link) {
		link.addEventListener('click', function (e) {
			var href = this.getAttribute('href');
			if (href && href.startsWith('#')) {
				var targetId = href.slice(1);
				var target = document.getElementById(targetId);
				if (target) {
					e.preventDefault();
					target.scrollIntoView({ behavior: 'smooth' });
				}
			}
		});
	});
})(); 