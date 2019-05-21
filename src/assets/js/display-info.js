function displayInfoBlockConstructor() {

	let $displayInfoBlock = $('<div></div>');

	// $displayInfoBlock.addClass('display-info');

	$displayInfoBlock.css({

		'text-align': 'center',
		position: 'fixed',
		width: '100%',
		color: 'red',
		'font-size': '20px',

		margin: 'auto'
	});

	// displayInfoBlock.before = "<h1>";
	// displayInfoBlock.after = "</h1>";

	// displayInfoBlock.cssStyles = {};


	$('body').append($displayInfoBlock);

	$displayInfoBlock.on('click', function(){

		$displayInfoBlock.detach();
	})

	return $displayInfoBlock
}

module.exports = displayInfoBlockConstructor;