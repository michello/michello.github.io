$(document).ready(function() {

	$('.toggle-nav').click(function(e) {
		$(this).toggleClass('active');
		$('.nav-main ul').toggleClass('active');
		e.preventDefault();
	});

	$(".message").typed({
          strings: ["like to program.", "am part of Tech@NYU's infrastructure team.", "am a hackathon enthusiast.", "live, breathe and drink coffee.", "organized a hackathon called Social Hacks!", "designed and created NYU SASE's website.", "design flyers for Poly Anime Society."],
          typeSpeed: 60,
          shuffle: true,
          loop: true,
          contentType: 'text'
    });	
});