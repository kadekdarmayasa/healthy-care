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

	backToTop();
});

// Back to top logic
let btnBackToTop = document.getElementById('back-to-top');
function backToTop() {
	if (document.documentElement.scrollTop > 500 || document.body.scrollTop > 500) {
		btnBackToTop.style.display = 'block';
	} else {
		btnBackToTop.style.display = 'none';
	}
}

btnBackToTop.addEventListener('click', function () {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});

// Nav lInk Active Logic
const sections = document.querySelectorAll('section');
const navLi = navLinks.querySelectorAll('li:not(:last-child)');

window.addEventListener('scroll', () => {
	let current = '';

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (scrollY >= sectionTop - 250) {
			current = section.getAttribute('id');
		}
	});

	navLi.forEach((li) => {
		li.classList.remove('active');
		if (li.classList.contains(current)) {
			li.classList.add('active');
		}
	});
});

// dark mode logic
function myFunction() {
	if (!document.body.classList.contains('dark')) {
		document.body.classList.add('dark');
		localStorage.setItem('dark', 'active');
	} else {
		document.body.classList.remove('dark');
		localStorage.setItem('dark', '');
	}
}

window.addEventListener('load', () => {
	if (localStorage.getItem('dark') == 'active') {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
});
