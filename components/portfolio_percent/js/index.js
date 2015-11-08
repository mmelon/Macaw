(function() {


  /*
   * Duplicate and modify img
   */
   $(document).ready(function() {
    var $img = $('.shots');
    for (var i = 0; i < 11; i++) {
      $img.clone().insertAfter($img);
    }
    var img_list = [
    "https://unsplash.it/500?image=10",
    "https://unsplash.it/500?image=20",
    "https://unsplash.it/500?image=30",
    "https://unsplash.it/500?image=40",
    "https://unsplash.it/500?image=50",
    "https://unsplash.it/500?image=60",
    "https://unsplash.it/500?image=70",
    "https://unsplash.it/500?image=80",
    "https://unsplash.it/500?image=90",
    "https://unsplash.it/500?image=100",
    "https://unsplash.it/500?image=110",
    "https://unsplash.it/500?image=120",
    ];
    $.each(img_list, function(i, value) {
      $(".shots img").eq(i).attr("src", value);
    });
     var title_list = [
    "Lorem \"lipsum1",
    "Lorem lipsum2",
    "Lorem lipsum3",
    "Lorem lipsum4",
    "Lorem lipsum5",
    "Lorem lipsum6",
    "Lorem lipsum7",
    "Lorem lipsum8",
    "Lorem lipsum9",
    "Lorem lipsum10",
    "Lorem lipsum11",
    "Lorem lipsum12",
    ];
    $.each(title_list, function(i, value) {
      $(".shots__txt--title").eq(i).html(value);
    });
  });


})();