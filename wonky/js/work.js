//var totalWidth = 0;
//$('#container').children('.item').each(function(){
//   totalWidth += $(this).outerWidth();
//});

//$('#container').width(totalWidth);



$(document).ready(function() {  
    // Stuff here  

	var container = $('#work-container .lazy, #work-container .item, #work-container .item .description'),
		headerHeight = $('header').height();
	
	// adjust height on load
	$(document).ready(function() {
		container.height(innerHeight - 260);
	});

	$(window).resize(function() {
		changeHeight();
	});
	
	function changeHeight(){
		if ( $('#work-container').hasClass('no-resize')){
				// Nothing happens
			}
		else {
		$(container).height(innerHeight - 260);
		}
	}
	
	

	//////////////////////////////////////// MENUS //////////////////////////////////////////

	var $secondary = $(".secondary");
	var $digital_list = $("#digital-list");
	var $print_list = $("#print-list");
	var $branding_list = $("#branding-list");

	// SHOW/HIDE SECONDARY
	$('.primary #work').hover(function() {
		$secondary.slideDown(200);
	});

	$('html').click(function() {
		$secondary.slideUp(200);
	});


	// SHOW/HIDE DIGITAL
	$('.secondary #digital a').hover(function() {
		$digital_list.slideDown(200),
		$branding_list.slideDown(200),
		$print_list.slideUp(300),

		$(this).toggleClass("active");
	});

	$('.secondary #digital a').click(function(e) {
		e.stopPropagation();
	});

	$('html').click(function() {
		$digital_list.slideUp(200);
	});


	// SHOW/HIDE BRANDING
	$('.secondary #branding a').hover(function() {
		$branding_list.slideDown(200),
		$digital_list.slideUp(300),
		$print_list.slideUp(300),

		$(this).toggleClass("active");
	});

	$('.secondary #branding a').click(function(e) {
		e.stopPropagation();
	});

	$('html').click(function() {
		$branding_list.slideUp(200);
	});

	// SHOW/HIDE PRINT
	$('.secondary #print a').hover(function() {
		$print_list.slideDown(200),
		$digital_list.slideUp(300),
		$branding_list.slideUp(300),

		$(this).toggleClass("active");
	});

	$('.secondary #print a').click(function(e) {
		e.stopPropagation();
	});

	$('html').click(function() {
		$print_list.slideUp(200);
	});




	// PRVENT DEFAULT ON CLICK TO KEEP MENUS OPEN 
	$('.primary #work li').click(function(e) {
		e.preventDefault();
	});

	$('.primary #work li a').click(function(e) {
		e.preventDefault();
	});



	//////////////////////////////////// AJAX LOAD /////////////////////////////////////  

	$("#about").click(function(){
		$("#main").load("../ajax/about.html");
	});
});




	/////////////////////////////// WORK EXPAND/CONTRACT ////////////////////////////////

	/* MOVE WORK CONTAINER WHEN MENU EXPANDED */
	$(".secondary li").hover(function () {
		$('#work-container').animate({
			marginTop: "300px"
		});
	});

	$("html").click(function () {
		$('#work-container').animate({
			marginTop: "250px"
		});
	});


	/* SCROLL HEADER+WORK UP VERSION 1
	$(function(){
		$('header').data('size','big');
	});

	$(window).scroll(function(){
		var $nav = $('header');
		if ($('body').scrollTop() > 30) {
			if ($nav.data('size') == 'big') {
				$nav.data('size','small').stop().animate({
					paddingTop:'4em'
				}, 300),
				$('#social').slideUp(400);
			}
		} else {
			if ($nav.data('size') == 'small') {
				$nav.data('size','big').stop().animate({
					paddingTop:'12em'
				}, 300),
				$('#social').slideDown();
			}  
		}
	}); */

/* SCROLL HEADER+WORK UP VERSION 2 */
$(document).on("scroll",function(){
    if($("body").scrollTop()>30){
        $("header").removeClass("expand").addClass("shrink"),
        $('#social').slideUp(400);
    } else{
        $("header").removeClass("shrink").addClass("expand"),
        $('#social').slideDown(400);
    }
});
