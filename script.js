/** efeito parallax **/
$(function(){
	$('nav#navigation ul li a').hover(function(){
		var newWidth = $(this).width() + 30;
		var newLeft = $(this).position().left;
		
		$('span.line').stop().animate({
			width: newWidth,
			left: newLeft
		});
	});

});
	
	
	$('div.bgParallax').each(function(){
    var $obj = $(this);

    $(window).scroll(function() {
        var yPos = -($(window).scrollTop() / $obj.data('speed')); 

        var bgpos = '50% '+ yPos + 'px';

        $obj.css('background-position', bgpos );

    }); 
});