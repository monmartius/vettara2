import "../scss/main-styles.scss";

let common = require('./common.js');

let wow = require('wowjs');

let displayInfo = new require('./display-info.js')();

require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');

new wow.WOW().init();
console.log(wow);

let $popularServicesSlider = $('#popular-services-slider');


$popularServicesSlider.animationEffect = 'bounceIn';


$popularServicesSlider.$innerSliders = $('.popular-services-slide__description', $popularServicesSlider);

console.log($popularServicesSlider.$innerSliders);

$popularServicesSlider.$innerSliders.slick({

	infinite: true,
	speed: 1000,
	// autoplay: true,
	autoplaySpeed: 2000,
	// variableWidth: false,
	adaptiveHeight: false	
});

$('.popular-services__slide').on('click', function(e){

	e.preventDefault();

});

$popularServicesSlider.init = function (){

	$popularServicesSlider.slick({

			// dots: true,
			infinite: true,
			speed: 1000,
			// autoplay: true,
			autoplaySpeed: 4000,
			// variableWidth: false,
			adaptiveHeight: false
			// ,
			// vertical: true

	});

	// let $slides = this.slick('getSlick').$slides;
	
	// for(let i = 0 ; i < $slides.length ; i++){

	// 	let $animatedElements = $('.element-animated', $slides[i]);


	// 	$animatedElements.addClass('animation-duration');
	// 	$animatedElements.addClass('animation-paused');			
	// 	$animatedElements.addClass('animation-delay');			
	// 	$animatedElements.addClass(this.animationEffect);	

	// 	$popularServicesSlider.slick('slickAdd', $slides[i]);
	// }

}


$popularServicesSlider.init();

// $popularServicesSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){

// 	let $slides = $('#popular-services-slider .slick-slide');

// 	for(let i = 0 ; i < $slides.length; i++){


// 		let $animatedElements = $('.element-animated', $slides[i]);
// 		let slideIndex = $($slides[i]).hasClass('slick-current');

// 		if(!$($slides[i]).hasClass('slick-current')){

// 			$animatedElements.removeClass('animation-running')
// 				// .removeClass('s-current')
// 				.addClass('animation-paused')		
// 				.addClass('animation-delay')		
// 				.each(restartAnimation);
// 		}
// 	}
// });


// function restartAnimation(index, element){
//  	var newElement = element.cloneNode(true);
//     element.parentNode.replaceChild(newElement, element);
// }


// $popularServicesSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){

// 	let $animatedElements = $('.element-animated', slick.$slides[currentSlide])
// 		.removeClass('animation-paused')
// 		.addClass('animation-running')			
// 		.each(restartAnimation);
// });