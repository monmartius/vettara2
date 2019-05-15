require('bootstrap'); 
let breakpoints = require('./breakpoints.js');


if(process.env.NODE_ENV == "development"){

	let displayInfo = require('./display-info.js');



	displayInfo.html('size: ' + breakpoints.onPoint() + '<br>'+ breakpoints.windowSizePx().widthHeight);

	displayInfo.css({

		'background-color': 'rgba(255, 0, 0, .6)',
		'color': 'white',
		'right': '20px',
		'width' : '80px',
		'bottom' : 30,
		'font-size' : '12px',
	});


	$(window).on('resize', function(){

		displayInfo.html('size: ' + breakpoints.onPoint() + '<br>'+ breakpoints.windowSizePx().widthHeight);
	});



}

$('.top-menu__icon').on('click', function(event){

	event.stopPropagation();

	if(!$('.top-menu__options').hasClass('active')){

		$('.top-menu').addClass('active');
		$('.top-menu__options').addClass('active').slideDown(500);
		$('.top-menu__icon').addClass('active');
	}
	else{

		$('.top-menu').removeClass('active');
		$('.top-menu__options').removeClass('active').slideUp(500);
		$('.top-menu__icon').removeClass('active')
	}
})


$(document).on('click', function(e){



	if($('.top-menu__options').hasClass('active')){

		$('.top-menu').removeClass('active');
		$('.top-menu__options').removeClass('active').slideUp(500);
		$('.top-menu__icon').removeClass('active')
	}
});



window.global_variables = {};

window.global_variables.breakpoints = breakpoints;

