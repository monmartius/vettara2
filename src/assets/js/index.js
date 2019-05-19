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

$popularServicesSlider.slick({

		// dots: true,
		infinite: true,
		speed: 4000,
		autoplay: true,
		autoplaySpeed: 4000,
		// variableWidth: false,
		adaptiveHeight: false
		// ,
		// vertical: true

});


let animationEffect = 'bounceIn';
let $popularServicesSliderSlides = $('.popular-services-slider-slides').detach();
// let $popularServicesSliderSlides = $('.popular-services-slider-slides');
// console.log('$popularServicesSliderSlides');
// console.log($popularServicesSliderSlides);

let $slides = $('.popular-services-slider-slide', $popularServicesSliderSlides);

// console.log($slides)

// $popularServicesSlider.slick({autoplay: true});

for(let i = 0 ; i < $slides.length ; i++){

	$($slides[i]).attr('data-user-slide-index', i);

	let $animatedElements = $('.element-animated', $slides[i]);


	$animatedElements.addClass('duration3s');
	$animatedElements.addClass('animation-paused');			
	$animatedElements.addClass(animationEffect);	

	$popularServicesSlider.slick('slickAdd', $slides[i]);
}

/*

slickCurrentSlide
	none
	Returns the current slide index


slickGoTo
	int : slide number, boolean: dont animate
	Navigates to a slide by index
slickNext
	none
	Navigates to the next slide
slickPrev
	none
	Navigates to the previous slide


slickAdd
 	html or DOM object, index, addBefore
	Add a slide. If an index is provided, will add at that index, or before if addBefore is set. If no index is provided, add to the end or to the beginning if addBefore is set. Accepts HTML String || Object
slickRemove

*/



$popularServicesSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){


	// console.log($(slick.$slides[currentSlide]));

// alert('currentSlide ' + currentSlide) 


	let $slides = $('#popular-services-slider .slick-slide');

	// let $animatedElementsClonedSlides = $('.element-animated', $clonedSlides);

	// let $currentSlide = $(slick.$slides[currentSlide]);
	// let $nextSlide = $(slick.$slides[nextSlide]);

	for(let i = 0 ; i < $slides.length; i++){


		let $animatedElements = $('.element-animated', $slides[i]);
		let slideIndex = $($slides[i]).hasClass('slick-current');
	// console.log($animatedElements.html());
	// console.log($animatedElements )

		if(!$($slides[i]).hasClass('slick-current')){

			$animatedElements.removeClass('animation-running')
				.removeClass('s-current')
				.addClass('animation-paused')		
				.each(restartAnimation);
// alert('i ' + i)

		}
	}
// alert(currentSlide)
});


function restartAnimation(index, element){
 	var newElement = element.cloneNode(true);
    element.parentNode.replaceChild(newElement, element);
}

$popularServicesSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){

	let $animatedElements = $('.element-animated', slick.$slides[currentSlide])
		.removeClass('animation-paused')
		.addClass('animation-running')			
		.each(restartAnimation);
});