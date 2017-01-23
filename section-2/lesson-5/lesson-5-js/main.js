require.config({

	paths: {
		knockout: '../../../global-js-libs/knockout-3.4.1.min',		
		jquery: '../../../global-js-libs/jquery-3.1.1.min',
		myViewModel: 'app'
	}

});

require([
	'knockout',
	'jquery',
	'myViewModel'

], function(knockout, $, myViewModel) {
	$('h1').css('color', 'red');

	knockout.applyBindings(myViewModel);
	
});