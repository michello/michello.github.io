$(document).ready(function() {
	$('.toggle-nav').click(function(e) {
		$(this).toggleClass('active');
		$('.nav-main ul').toggleClass('active');
		e.preventDefault();
	});	
});
