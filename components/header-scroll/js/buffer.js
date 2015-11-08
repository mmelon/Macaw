(function() {


  $(function(){
    var header = $('#header').offset().top;

    $(window).scroll(function(){
      if( $(window).scrollTop() > header ) {
        $('#header').toggleClass('on');
      } else {
        $('#header').toggleClass('off');
      }
    });
  });
})();