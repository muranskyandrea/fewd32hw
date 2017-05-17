$( document ).ready(function() {
  // Handler for .ready() called.

  jQuery('.readmore').click(function(event){
        event.preventDefault();
    });

  jQuery('.readless').click(function(event){
        event.preventDefault();
    });

 

  jQuery('.readmore').on('click',showMore);

  function showMore(){
  	 
  {
  	jQuery('#show-this-on-click').slideDown();
  	jQuery('.readmore').hide();
  	jQuery('.readless').show();
  }
 
jQuery('.readless').on('click',showLess);

  function showLess(){
 		
 		
 		jQuery('.test').slideUp(400, );
 		jQuery('.readmore').show();

  	
 	}
}


 //end doc ready
});
