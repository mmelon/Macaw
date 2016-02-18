(function() {


  // Advanced Slider with options
  $(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      easing: "swing", // or linear
      direction:	"horizontal",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      mousewheel: true,
      touch: true,
    });
  });
})();