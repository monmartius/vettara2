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

window.global_variables = {};

window.global_variables.breakpoints = breakpoints;

