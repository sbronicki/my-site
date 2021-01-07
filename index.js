// nav bar scoll

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

// mobile ordering
if (window.innerWidth < 768) {
	document.getElementById('mobileSwitch').innerHTML = `
	<div class="row hobby">
	<div class="column">
		<div class="column-img">
			<img src="img/swampweed.jpeg" alt="">
		</div>
	</div>
	<div class="column">
		<div class="column-txt">
			<h2>Film, Photography & Media Editing</h2>
			<p>Photoshop, Final Cut Pro</p>
			<ul>
				<li><a href="https://www.youtube.com/nimso9">My YouTube</a></li>
			</ul>
		</div>
	</div>
</div>
<div class="row education">
                        <div class="column">
                            <div class="column-img">
                                <img src="img/IMG_0126.jpg" alt="">
                            </div>
                        </div>
                        <div class="column">
                            <div class="column-txt">
                                <h2 class="skills">Education</h2>
                                <ul>
                                    <li>Bachelor of Physics from New Jersey Institue of Technology (NJIT) </li>
                                    <li>Associate of Physics from Brookdale Community College (BCC)</li>
                                    <li>Associate of Mathematics (BCC)</li>
                                    <li>Associate of Social Sciences (BCC)</li>
                                </ul>
                            </div>
                        </div>
                    </div>`;
}
// add event listener to detect shrinking screen size
