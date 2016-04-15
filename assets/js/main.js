$(function() {
   //cash window object
   var $window = $(window);
   
   //parallax
   $('section[data-type="background"]').each(function() {
      
      var $bgobj = $(this); //assigning the object
      $window.scroll(function() {
          
         //scroll background at var speed
         //y position is negative because it scrolls up
         var yPos = -($window.scrollTop() / $bgobj.data('speed'));
         
         //final background position
         var coords = '50% ' + yPos + 'px';
         
         //move the background
         $bgobj.css({backgroundPosition: coords})
      }); //end window scroll
   });
});