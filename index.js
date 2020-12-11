const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function() {
	if (window.pageYOffset > 600) {
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

// //////////////////

if (window.innerWidth < 768) {
	document.getElementById('mediaSection').innerHTML = `
<div class="row">
    <div class="column">
        <div class="column-1">
            <img src="img/swampweed.jpeg" alt="">
        </div>
    </div>
    <div class="column">
        <div class="column-2">
            <div>
                <h3 class="skills">Film & Photography/Media Editing</h3>
                <p>Photoshop, Final Cut Pro</p>
                <h2><a href="https://www.youtube.com/nimso9">My YouTube</a></h2>
            </div>
        </div>
    </div>
</div> `;
}
