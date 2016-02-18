(function() {


  /* Simple slider
  $(window).load(function() {
    $('.flexslider').flexslider();
  });
  */

  // Slider with options
  $(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      easing: "swing", // linear
      controlNav: true,
      animationLoop: false,
      slideshow: false,
      mousewheel: true,
    });
  });
})();