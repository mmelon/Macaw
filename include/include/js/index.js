(function() {


  /*
   * function
   * #include: contains the element that you want to load
   * /!\ #include element itself will be dismissed
   * body: where you'll load those elements (you can also target an #ID or .style)
   */
  (function ($) {
    $.include = function (options) {
      $.ajax({
        url: options.url,
        async: true, //!important
        success: function (result) {
          result = $(result).filter("#include").html();
          if (options.prependResult) {
            $("body").prepend(result);
          } else {
            $("body").append(result);
          }
        }
      });
    };
  }(jQuery));

  /*
   * function invocation
   * /!\ order is important !
   * prepend=true => load before
   * prepend=false => load after
   */
  //$.include({url: '_modal.html', prependResult: true});
  //$.include({url: '../nav.html', prependResult: true}); //external page
  $.include({url: '_content.html', prependResult: true});
  $.include({url: '_header.html', prependResult: true});
  $.include({url: '_footer.html', prependResult: false});
})();