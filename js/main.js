let home_height = $('.section-home').height();
let projects_height = $('.section-projects').height();
let blogs_height = $('.section-blogs').height();
let contact_height = $('.section-contact').height();
let nav_height = $('.nav').height();

let activeButton = '.nav-home';

$(window).scroll(function(){

	let scroll_top = $(window).scrollTop();
	// when scroll to  poject section
	if(scroll_top > home_height - (home_height / 4)){
		$('.nav').fadeIn(600).addClass('nav-show');
		$(activeButton).removeClass('active');
		$('.nav-projects').addClass('active');
		activeButton = '.nav-projects';
	}else{
		$('.nav').fadeOut(0).removeClass('nav-show');
		$('.nav-projects').removeClass('active');
	}

	// when scroll to blogs section
	if(scroll_top > home_height + (projects_height / 2)){
		$('.nav-blogs').addClass('active');
		$(activeButton).removeClass('active');
		activeButton = '.nav-blogs';

	}else{
		$('.nav-blogs').removeClass('active');
	}

	if(scroll_top > home_height + projects_height + (contact_height / 2)){
		$('.nav-contact').addClass('active');
		$(activeButton).removeClass('active');
		activeButton = '.nav-contact';

	}else{
		$('.nav-contact').removeClass('active');
	}
});

$(".see-more").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-projects").offset().top},
        'slow');
    $('.nav-projects').addClass('active');
});

$(".nav-home").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-home").offset().top},
        'slow');
    $(activeButton).removeClass('active');
    $('.nav-home').addClass('active');
	activeButton = '.nav-home';
});