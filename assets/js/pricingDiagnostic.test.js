/**
 * Unit tests for pricingDiagnostic.js
 * Run: node assets/js/pricingDiagnostic.test.js
 */
'use strict';

var assert = require('assert');
var pd = require('./pricingDiagnostic.js');

function test(name, fn) {
	try {
		fn();
		console.log('✓', name);
	} catch (e) {
		console.error('✗', name);
		throw e;
	}
}

// Hospitality
test('hospitality + packaging → Pricing Sprint', function () {
	var r = pd.getRecommendation('hospitality', 'mid', 'packaging');
	assert.strictEqual(r.href, '/pricing-sprint/');
});

test('hospitality + intuition → Revenue Performance Audit', function () {
	var r = pd.getRecommendation('hospitality', 'mid', 'intuition');
	assert.strictEqual(r.href, '/revenue-performance-audit/');
});

// Coworking
test('coworking + sales_confidence → Value-Based Sprint', function () {
	var r = pd.getRecommendation('coworking', 'small', 'sales_confidence');
	assert.strictEqual(r.href, '/pricing-sprint/value-based-pricing/');
});

test('coworking + capacity → Revenue & Capacity Audit', function () {
	var r = pd.getRecommendation('coworking', 'mid', 'capacity');
	assert.strictEqual(r.href, '/pricing-audit/coworking/');
});

// SaaS
test('saas + model → SaaS Packaging Sprint', function () {
	var r = pd.getRecommendation('saas', 'mid', 'model');
	assert.strictEqual(r.href, '/pricing-sprint/saas/');
});

test('saas + capacity → General Diagnostic', function () {
	var r = pd.getRecommendation('saas', 'mid', 'capacity');
	assert.strictEqual(r.href, '/contact/');
});

test('saas + channels → SaaS Pricing Audit', function () {
	var r = pd.getRecommendation('saas', 'mid', 'channels');
	assert.strictEqual(r.href, '/pricing-audit/');
});

// Services
test('services + underpricing → Value-Based Sprint', function () {
	var r = pd.getRecommendation('services', 'mid', 'underpricing');
	assert.strictEqual(r.href, '/pricing-sprint/value-based-pricing/');
});

test('services + intuition → Pricing Audit', function () {
	var r = pd.getRecommendation('services', 'mid', 'intuition');
	assert.strictEqual(r.href, '/pricing-audit/');
});

// Ecommerce
test('ecommerce + discounting → Margin Diagnostic', function () {
	var r = pd.getRecommendation('ecommerce', 'large', 'discounting');
	assert.strictEqual(r.href, '/pricing-audit/margin/');
});

test('ecommerce + packaging → Pricing Sprint', function () {
	var r = pd.getRecommendation('ecommerce', 'mid', 'packaging');
	assert.strictEqual(r.href, '/pricing-sprint/');
});

test('ecommerce + intuition → General Diagnostic', function () {
	var r = pd.getRecommendation('ecommerce', 'mid', 'intuition');
	assert.strictEqual(r.href, '/contact/');
});

// Other
test('other → General Diagnostic', function () {
	var r = pd.getRecommendation('other', 'unknown', 'model');
	assert.strictEqual(r.href, '/contact/');
});

// Intensity notes
test('micro includes intensityNote', function () {
	var r = pd.getRecommendation('other', 'micro', 'model');
	assert.ok(r.intensityNote && r.intensityNote.includes('pienemmässä vaiheessa'));
});

test('unknown has no intensityNote', function () {
	var r = pd.getRecommendation('other', 'unknown', 'model');
	assert.strictEqual(r.intensityNote, undefined);
});

test('large includes intensityNote', function () {
	var r = pd.getRecommendation('hospitality', 'large', 'channels');
	assert.ok(r.intensityNote && r.intensityNote.includes('kertautuu'));
});

console.log('\nAll', 15, 'tests passed.');
