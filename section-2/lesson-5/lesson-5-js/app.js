/**
 * @todo: describe the intent of this code
 */

define(['knockout', 'jquery'], function(knockout, $) {

	return function myViewModelObj() {
		firstName = knockout.observable('Mike'),
		lastName = knockout.observable('Doe')
	

	$('button').click(function(){
		firstName('George');
		lastName('Williams');
	});

	firstName.subscribe(function(newValue){
		alert("The users first name is now "+newValue);
	});

	firstName.subscribe(function(oldValue){
		alert("The users previous name was "+oldValue);
	},null, "beforeChange");

	}

});

//ko.applyBindings(myViewModel);