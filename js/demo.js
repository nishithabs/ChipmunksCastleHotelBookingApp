
//for spinner buttons  

$(function ($) {
    $('#handleCounter1').handleCounter({
    minimum: 1,
    maximize: 100,       
    })
          
   $('#handleCounter2').handleCounter({
    minimum: 1,
    maximize: 100,
   })
});
      
  
//for datepicker

addEventListener('DOMContentLoaded', function () {  
	pickmeup('.range', {
		mode : 'range',
        separator: '    to   ',
        position :'bottom',
        format: 'd b-y', 
	}); 
});


// image slider main
$(document).ready(function(){
                $('.single').slick({
                autoplay : true,
                pauseOnFocus : false,
                pauseOnHover : false,
                arrows : false,
                draggable : false,
              });
              
$('.left').click(function(){
$('.single').slick('slickPrev');
})

$('.right').click(function(){
$('.single').slick('slickNext');
})
$('.room').slick({
  autoplay : false,
  slidesToShow :3,
  pauseOnFocus : true,
  arrows : false,
  draggable : true,
  swipeToSlide : true,
});
$('.review').slick({
      autoplay : true,
      autoplaySpeed : 6000,
      pauseOnFocus : true,
      pauseOnHover : false,
      arrows : false,
      draggable : true,
      });
});               
                
                
//scrolltotop
 
   $(function () {
  $.scrollUp({
    scrollName: 'scrollUp', 
    topDistance: '600' , 
    topSpeed: 300 , 
    animation: 'fade', 
    animationInSpeed: 500, // Animation in speed (ms)
    animationOutSpeed: 500, // Animation out speed (ms)
    scrollText: '^',
    activeOverlay: false, 
  });
});
