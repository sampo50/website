// Basic interactivity for the portfolio site will be added later.

(function () {
	// Smooth scroll and mobile nav toggling added in later step
	console.log("Portfolio site initialized");

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