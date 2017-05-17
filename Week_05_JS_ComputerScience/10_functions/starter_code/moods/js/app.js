

jQuery(document).ready(function(){ //wait for the DOM elements to load before executing

jQuery('#submit-btn').click(function(e){
	e.preventDefault()
	var myMood = jQuery('#mood').val(); //grab input from input field and assign the variable "mymood to it"
	jQuery('#mood').val(''); //resets field to empty after button is clicked.
	myMood = myMood.toLowerCase().trim();


	if(myMood == 'excited' || myMood == 'ecstatic' || myMood == 'fantastic'){
		jQuery('.moodring div').attr('class','excited')
	}
	else if (myMood == 'happy' || myMood == 'good' || 'great'){
		jQuery('.moodring div').attr('class','happy')
	}

	else (myMood == 'bad' || myMood == 'angry'){
		jQuery('moodring div').attr('class', 'bad')
	}
});



jQuery('#submit-btn').click(submitForm);

function submitForm(){}
	// Create a function that runs whenever the submit button is clicked

        //prevent the submit button from refreshing the page


        //Create a variable called moodvalue and get the value of the #mood input


        //Correct for capitalization

        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'

        // if the user inputs happy/good/great change the CSS class to 'happy'

        // if the user inputs bad/angry change the CSS class to 'bad'

    // Listen for user interaction on the submit button.





});