const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function() {
	if (window.pageYOffset > 200) {
		navbar.classList.remove('top');
		setTimeout(function() {
			navbar.style.transform = 'translateY(0)';
			scrolled = true;
		}, 1500);
	} else {
		navbar.classList.add('top');
		scrolled = false;
	}
};
