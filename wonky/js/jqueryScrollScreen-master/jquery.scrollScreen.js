(function($){  
	$.fn.scrollScreen = function(options) {  
		var settings = $.extend( {
			'speed'                     : 400,
			'easing'                    : 'swing',
			'horizontal_position'       : 'center', //left, right, center, or none
			'left_padding'              : 20,
			'right_padding'             : 20,
			'vertical_position'         : 'middle', //top, bottom, middle, or none
			'top_padding'               : 20,
			'bottom_padding'            : 20,
			'delay'                     : 500 //delay between scrolling to each element if more than one element is provided
		}, options);
		return this.each(function() {
			element = $(this);
			var position = element.offset();
			var element_width = element.outerWidth();
			var element_height = element.outerHeight();
			var window_width = $(window).width();
			var window_height = $(window).height();
			var doc_width = $(document).width();
			var doc_height = $(document).height();
			var scroll_to_left = $(document).scrollLeft();
			var scroll_to_top = $(document).scrollTop();
			
			if (settings.horizontal_position === 'center') {
				scroll_to_left = ((position.left) - (window_width / 2) + (element_width / 2));
			}
			else if (settings.horizontal_position === 'left') {
				scroll_to_left = position.left - settings.left_padding;
			}
			else if (settings.horizontal_position === 'right') {
				scroll_to_left = position.left + element_width - window_width + settings.right_padding;
			}
			else { console.log('ERROR: Invalid horizontal position passed to scrollScreen(). Valid horizontal positions are: "center", "left", "right"'); }
			if (settings.vertical_position === 'middle') {
				scroll_to_top = ((position.top) - (window_height / 2) + (element_height / 2));
			}
			else if (settings.vertical_position === 'top') {
				scroll_to_top = position.top - settings.top_padding;
			}
			else if (settings.vertical_position === 'bottom') {
				console.log(scroll_to_top);
				scroll_to_top = position.top + element_height - window_height + settings.bottom_padding;
			}
			else { console.log('ERROR: Invalid vertical position passed to scrollScreen(). Valid vertical positions are: "middle", "top", "bottom"'); }
			if (settings.horizontal_position !== 'none' && settings.vertical_position !== 'none') {
				$('html, body').animate({scrollLeft:scroll_to_left, scrollTop:scroll_to_top}, {'duration': settings.speed, 'easing':settings.easing}).delay(settings.delay);
			} else if (settings.horizontal_position !== 'none' && settings.vertical_position === 'none') {
				$('html, body').animate({scrollLeft:scroll_to_left}, {'duration': settings.speed, 'easing':settings.easing}).delay(settings.delay);
			} else if (settings.horizontal_position === 'none' && settings.vertical_position !== 'none') {
				$('html, body').animate({scrollTop:scroll_to_top}, {'duration': settings.speed, 'easing':settings.easing}).delay(settings.delay);
			}
		});  
	};
})(jQuery);
