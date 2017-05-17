jQuery(document).ready(function(){


//compare function
function compareValues(){ //everything is wrapped in this except for submit


	//get values of inputs
	var a = jQuery('#a').val(); //extracts value of inputs
	var b = jQuery('#b').val();
	var displayValue; //arbitrary variable to use in the if statements and then in the display output

	//convert input strings to numbers
	a = parseFloat(a); //turns variables that began as strings into numbers
	b = parseFloat(b);



	//If inputs ARE numbers
		//IF a > b, display = ">"
		if (a > b){
			displayValue = ">";
		}

		else if (b > a){
			displayValue = "<";
		}

		else if (a == b){
			displayValue = "=="

		}

		else{
			displayValue = "N/A" //catchall, includes if inputs ARE NOT numbers. good
		}




	//put display to output span
	jQuery("#comparison").text(displayValue); //display the variable created in line 11 rather than adding this line for each if statement
}

//submit click
jQuery('#submit').click(compareValues); //run compareValues function when #submit is clicked






});