(function() {


  // Basic slider
  $(window).load(function() {
    $('.flexslider_01').flexslider({
      animation: 'slide',
      controlNav: false,
      slideshowSpeed:6000
    });
    $('.flexslider_02').flexslider({
      animation: 'slide',
      controlNav:false,
      slideshowSpeed:3000
    });
  });
})();