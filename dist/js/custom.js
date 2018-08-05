$(document).ready(function() {

	$('#btn-arrow-down').click(function () {
    var blockHeight = $('.mainbanner').outerHeight();
    $('body,html').animate({
      scrollTop: blockHeight
    }, 1000);
  });

	$('#menu-opener').click(function() {
		$(this).toggleClass('close-btn');
		$('body').toggleClass('stop-scrolling');
		$('#header').toggleClass('nav-opened');
		$('#mobile-nav').slideToggle();
	});

	$('#mobile-nav .with-dropmenu').click(function(){
		if ( !$(this).hasClass('opened') ) {
			$(this).addClass('opened');
			$(this).children('.dropmenu').slideDown();
			$(this).siblings().children('.dropmenu').slideUp();
		}
		else {
			$(this).removeClass('opened');
			$(this).children('.dropmenu').slideUp();
		}
	});

	$('#slider-main').owlCarousel({
		loop: true,
		items: 1,
		dots: false,
		nav: true,
		navText: ["<span class='icon-arrow-left'>","<span class='icon-arrow-right'>"],
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		mouseDrag : false,
		touchDrag : false,
		smartSpeed:1000,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	});

	$('#slider-partner').owlCarousel({
		loop: true,
		items: 8,
		margin: 50,
		dots: false,
		nav: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		autoWidth:true,
		smartSpeed: 2000,
	});

});

// Header fixed
$(window).scroll(function(){
    var scrolled = $(this).scrollTop();
    if( scrolled >= 20 ){
        $('#header').addClass('header-fixed');
    }   
    else{     
        $('#header').removeClass('header-fixed');
    }
});