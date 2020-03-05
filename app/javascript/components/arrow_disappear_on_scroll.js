import $ from 'jquery';

const arrowDisappearOnScroll = () => {
	$(window).bind('scroll', function() {
	     if ($(window).scrollTop()) {
	         $('.card-arrow').hide();
	     }
	});

}

export { arrowDisappearOnScroll }