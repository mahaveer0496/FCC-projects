
// Parallax Scrolling
$(function(){
	var $window = $(window);
	// chage selector for different parts for parallax
	$('body').each(function(){ 
		var $bgobj = $(this);
		$(window).scroll(function(){
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			var coords = '50%' + yPos + 'px';
			$bgobj.css({backgroundPosition : coords});
		});
	});
});