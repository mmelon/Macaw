(function() {


  // function
  (function ($) {
    $.include = function (options) {
      $.ajax({
        url: options.url,
        async: false, //!important
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

  // function invocation
  $.include({url: '_header.html', prependResult: true});
  $.include({url: '_footer.html', prependResult: false});
})();