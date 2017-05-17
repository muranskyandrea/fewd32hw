jQuery(document).ready(function(){



jQuery('.box').click(colorChange);

function colorChange(){

jQuery('.box').css('background', '#f9ef99');

jQuery('.box_text').text('This is a box that I made.');

}

jQuery('.box').click(heightChange);

function heightChange(){
jQuery(this).css({'height':'500px', 'width':'500px'});

}



});