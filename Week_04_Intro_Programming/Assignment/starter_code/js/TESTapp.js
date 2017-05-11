$( document ).ready(function() {
  // Handler for .ready() called.

  jQuery('.readmore').click(function(event){
        event.preventDefault();
    });

function learnMoreSidebar(){
     
  
    jQuery('#learnmoretext').slideDown();
    jQuery('.learnmore').hide();

  }
  jQuery('.readless').click(function(event){
        event.preventDefault();
    })

  jQuery('.learnmore').click(function(event){
        event.preventDefault();
        learnMoreSidebar();
    });

 

  jQuery('.readmore').on('click',showMore);

  function showMore(){
  	 
  	jQuery('#show-this-on-click').slideDown();
  	jQuery('.readmore').hide();
    jQuery('.readless').show();
  }
 
jQuery('.readless').on('click',showLess);

  function showLess(){
 		
 		jQuery('#show-this-on-click').slideUp();
 		jQuery('.readless').hide();
    jQuery('.readmore').show();
  	
 	}

  



 //end doc ready
});
