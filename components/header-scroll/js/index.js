(function() {
  var $header = $('.js-header');


  $(function(){
    var header = $header.offset().top;

    $(window).scroll(function(){
      if( $(window).scrollTop() > header ) {
        $header.addClass('.on');
        $header.backgroundColor('red');
        console.log('ON');
      } else {
        $header.addClass('.off');
        console.log('OFF');
      }
    });
  });
})();