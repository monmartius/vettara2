import "../scss/main-styles.scss";

let common = require('./common.js');

let wow = require('wowjs');

let breakpoints = window.global_variables.breakpoints;

// let displayInfo = new require('./display-info.js')();

require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');

new wow.WOW().init();
// console.log(wow);

let $popularServicesSlider = $('#popular-services-slider');


$popularServicesSlider.animationEffect = 'bounceIn';


$popularServicesSlider.$innerSliders = $('.popular-services-slide__description', $popularServicesSlider);

// console.log($popularServicesSlider.$innerSliders);

// $popularServicesSlider.$innerSliders.slick({

// 	infinite: true,
// 	speed: 1000,
// 	// autoplay: true,
// 	autoplaySpeed: 2000,
// 	// variableWidth: false,
// 	adaptiveHeight: false	
// });

$('.popular-services__slide').on('click', function(e){

	e.preventDefault();

});

// alert('onResize');

// breakpoints.onResize(700);

// $(window).on('inin', function(){

// 	console.log('================================')
// })

// $(window).on('breakpoint.changed', function(){

// 	console.log(breakpoints.onPoint());	
// 	console.log(breakpoints.previousBreakpoint);	
// });



// $popularServicesSlider.init = function (){

// 	$popularServicesSlider.slick({

// 			// dots: true,
// 			infinite: true,
// 			speed: 1000,
// 			// autoplay: true,
// 			autoplaySpeed: 4000,
// 			// variableWidth: false,
// 			adaptiveHeight: false
// 			// ,
// 			// vertical: true

// 	});

	// let $slides = this.slick('getSlick').$slides;
	
	// for(let i = 0 ; i < $slides.length ; i++){

	// 	let $animatedElements = $('.element-animated', $slides[i]);


	// 	$animatedElements.addClass('animation-duration');
	// 	$animatedElements.addClass('animation-paused');			
	// 	$animatedElements.addClass('animation-delay');			
	// 	$animatedElements.addClass(this.animationEffect);	

	// 	$popularServicesSlider.slick('slickAdd', $slides[i]);
	// }

// }

let onPoint = breakpoints.onPoint();

if(onPoint !=='-sm'){

	$popularServicesSlider.slick({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        // autoplay: true,
        autoplaySpeed: 4000,
        // variableWidth: false,
        adaptiveHeight: false
      

    });
}

$(window).on('breakpoint.changed', 

	()=> {

		if(breakpoints.previousBreakpoint === '-sm'){


			$("#popular-services-slider").slick({
		        dots: true,
		        infinite: true,
		        speed: 1500,
		        slidesToShow: 1,
		        // autoplay: true,
		        autoplaySpeed: 4000,
		        // variableWidth: false,
		        adaptiveHeight: false
		    });
		}
		else{

			if(breakpoints.breakpoint === '-sm'){

				$popularServicesSlider.slick('unslick');
			}
		}

	});