// PREPENDS ::
	// ASSETS/BOWER_COMPONENTS/SLICK-CAROUSEL/SLICK/SLICK.MIN.JS

// APPENDS ::
	// JS/SRC/NAV/RESPONSIVE-NAV.JS
	// JS/SRC/NAV/FASTCLICK.JS
	// JS/SRC/NAV/SCROLL.JS
	// JS/SRC/NAV/FIXED-RESPONSIVE-NAV.JS

$(document).ready(function(){
	$('.section-bg').slick({
	  	fade: true,
	    draggable: false,
	    swipe: false//,
	    // lazyLoad: 'progressive'
	});
});
