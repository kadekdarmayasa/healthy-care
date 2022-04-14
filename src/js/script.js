const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.close-icon');
const nav = document.querySelector('nav');
const checkbox = hamburgerMenu.querySelector('input[type=checkbox]');

hamburgerMenu.addEventListener('click', function () {
	navLinks.classList.toggle('active');
	nav.classList.toggle('active');
});

window.addEventListener('scroll', function () {
	if (this.document.body.scrollTop > 300 || this.document.documentElement.scrollTop > 300) {
		nav.classList.add('active');
	} else {
		nav.classList.remove('active');
	}
});
