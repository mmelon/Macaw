(function() {
  var $navbar = $('.js-navbar');
  var $toggle_icon = $('.js-toggle_icon');
  var $toggleMenu = $('.js-toggle-menu');


  //Duplicate menu element (for prototype only)
  $(document).ready(function() {
      var nav = $('.navbar__menu-item');
      for (var j = 0; j < 3; j++) {
          nav.clone().insertAfter(nav);
      }
    	// list
      var tag_list = [
          "Home",
          "Products",
          "Blog",
          "Contact",
      ];
      $.each(tag_list, function(i, value) {
          $(".navbar__link").eq(i).html(value);
      });
  });

  //Toggle menu
  $toggleMenu.click(function(){
      if($toggleMenu.hasClass("active")) {
          $navbar.slideUp("fast");
          $toggleMenu.toggleClass("active");
          $('.toggle-icon').html("menu");
      }
      else {
          $navbar.slideDown("fast");
          $toggleMenu.toggleClass("active");
          $('.toggle-icon').html("close");
      }
  });
  $(window).resize(function(){
      if (window.innerWidth>640) {
          $navbar.attr("style", "");
          $toggleMenu.removeClass("active");
          $('.toggle-icon').html("menu");
      }
  });
})();