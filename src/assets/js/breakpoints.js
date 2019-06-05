function objToArrayObjectsKeyValue(obj){

	arr = [];

	for (var key in obj){

		arr.push({ 'key' : key, 'value' : obj[key] } );
	}

	return arr;
}


var $window = $(window);
let win = window;

var	settings = {
		'sm' : 576,
		'md' : 768,
		'lg' : 992,
		'xl' : 1200
	};

	settings = objToArrayObjectsKeyValue(settings);

let breakpoints = {

	breakpoint : undefined,
	previousBreakpoint : undefined,


	init (parameters){

		if(parameters){

			parameters = objToArrayObjectsKeyValue(parameters);

			var temp;

			for( i = 0; i < parameters.length; i++ ){

				for( var j = i; j < parameters.length; j++ ){

					if( parameters[i]['value']  > parameters['value'] ) {

						var temp = parameters[i];
						parameters[i] = parameters[j];
						parameters[j] = temp;
					}

				}
			}

			settings = parameters;


		}

		settings.unshift({'key' : '-' + settings[0]['key'], 'value' : 1});


			this.previousBreakpoint = this.onPoint();
			this.breakpoint = this.onPoint();


		$window.on('resize', 

			()=>{


					this.breakpointOnResize = this.onPoint();

					if(this.breakpoint !== this.breakpointOnResize){

						this.previousBreakpoint = this.breakpoint;
						this.breakpoint = this.breakpointOnResize;


						var eventId = 'breakpoint.changed.' + this.previousBreakpoint + '>' + this.breakpoint;
						$window.trigger('breakpoint.changed');


				}
			}
		);







	}, 

	// onResize : function(width){

	// 	_this = this;

	// 		console.log('in');
	// 	$window.on('resize', function(){

	// 		console.log('on!');

	// 		if(_this.windowSizePx().width == width){


	// 			$window.trigger('inin');
	// 			// alert();
	// 			 // + width);				
	// 		}
	// 	});
		
	// },


	onPoint : function(){
		
		var breakpoint;				

		for( var i = 0 ; i < settings.length; i++){

			let breakpoint1condition = "(min-width:" + settings[i]['value'] + "px)";

			let breakpointcondition = 0;
	
			if(i === settings.length - 1){
			
				breakpoint2condition = "";

			}
			else{
				breakpoint2condition = " and (max-width:" + (settings[i+1]['value'] - 1) + "px)"
			}

			let condition = breakpoint1condition + breakpoint2condition;

			if(window.matchMedia(condition).matches){

				break;
			}
		}

		if( i <= 0 ){

			breakpoint = settings[0]['key'];
		}
		else{

			breakpoint = settings[i]['key'];
		}




		return breakpoint;
	}, 

	breakpointPx(breakpointKey){

		for( breakpoint in settings)

			if(settings[breakpoint].key === breakpointKey){

				return settings[breakpoint].value;
			}
		
	},

	windowSizePx(){

		let width = 1;
		let height = 1;

		for(width = 10000; width > 1; width--){

			if(window.matchMedia('(min-width:' + width + 'px)').matches){

				break;
			}

			
		}

		for(height = 10000; height >1; height--){

			if(window.matchMedia('(min-height:' + height + 'px)').matches){

				break;
			}

			
		}

		return {
				'width' : width, 
				'height' : height,
				'widthHeight' : 'width: ' + width + 'px; ' + ' height: ' + height + 'px; '
		}
	}

}; 



breakpoints.init();


module.exports = breakpoints ;

