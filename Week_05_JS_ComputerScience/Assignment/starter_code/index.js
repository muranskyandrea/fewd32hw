jQuery(document).ready(function(){


 

jQuery('#submit-btn').click(function(){ //action that "sets off the function"

event.preventDefault();
//preventdefault for the form


var city = jQuery('#city-type').val(); //define variables
city = city.toLowerCase().trim(); //make sure all cases are accepted, remove spaces at beg and end.



if(city == 'austin' || city == 'atx' || city == 'austin,texas' || city == 'austin, texas' || city == 'austintexas' || city == 'austin texas'){
	jQuery('body').attr('class', 'austin');
}

else if(city == 'nyc' || city == 'newyorkcity' || city == 'ny' || city == 'newyork' || city == 'new york city' || city == 'new york' || city == 'NYC'){
	jQuery('body').attr('class', 'nyc');
}

else if(city == 'los angeles' || city == 'la' || city == 'lax'){
	jQuery('body').attr('class', 'la');
}

else if(city == 'san francisco' || city == 'sf' || city == 'san francisco, california' || city == 'san fran' || city == 'bay area'){
	jQuery('body').attr('class', 'sf');
}

else if(city == 'sydney' || city == 'syd' || city == 'sydney, australia'){
	jQuery('body').attr('class', 'sydney');
}

else if(city == 'charlottesville' || city == 'cville' || city == 'charlottesville, va'){
	jQuery('body').attr('class', 'charlottesville');
}
//if statements... if user enters x than class changes.


jQuery('#city-type').val('');
//after user clicks, field resets to placeholder text

});


});