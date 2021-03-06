require('bootstrap'); 
let breakpoints = require('./breakpoints.js');



// if(process.env.NODE_ENV == "development"){
if(process.env.DEBUG_INFO !== "off"){

	let displayInfo = new require('./display-info.js')();
	let displayInfo2 = new require('./display-info.js')();



	displayInfo.html('size: ' + breakpoints.onPoint() + '<br>'+ breakpoints.windowSizePx().widthHeight);

	displayInfo.css({

		'background-color': 'rgba(255, 0, 0, .6)',
		'color': 'white',
		'right': '20px',
		'width' : '160px',
		'bottom' : 30,
		// 'bottom' : '0',
		'font-size' : '12px',
	});


 	displayInfo2.css({

		'background-color': 'rgba(255, 255, 0, .6)',
		'color': 'white',
		'right': '20px',
		'width' : '160px',
		'top' : 30,
		// 'left' : 30,
		'font-size' : '12px',
	});

 	function t(){

 		var seconds = 0;

 		return function(){

 			return seconds++;

 		}
 	}

 	timer = t();

	// setInterval(function(){

	// 	displayInfo2.html(timer);		
	// 	// displayInfo2.html(displayInfo2 === displayInfo);		
	// }, 1000 )


	$(window).on('resize', function(){

		let width = breakpoints.windowSizePx().width;
		let height = breakpoints.windowSizePx().height;

		displayInfo.html('size: ' + breakpoints.onPoint() 
			+ '<br>'+ breakpoints.windowSizePx().widthHeight 
			+ '<br>aspect-ratio: ' + width + '/' + height
			+ ' : ' + Math.round( width/height*100)/100 + "");
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

