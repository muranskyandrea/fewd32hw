

jQuery('#stopButton').on('click',redLight);
jQuery('#slowButton').on('click',yellowLight);
jQuery('#goButton').on('click',greenLight);

function redLight(){
	jQuery('#stopLight').css('background-color','red');
	jQuery('.bulb').css('background-color','black');
}

function yellowLight(){
	jQuery('#slowLight').css('background-color','yellow');
	jQuery('.bulb').css('background-color','black');
}

function greenLight(){
	jQuery('#goLight').css('background-color','green');
	jQuery('.bulb').css('background-color','black');
}



