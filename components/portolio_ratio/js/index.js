(function() {


  //Quick & dirty code
  $(document).ready(function() {
    var work = $('.shots--li');
    // shots list (11+1 img)
    for (var j = 0; j < 11; j++) {
      work.clone().insertAfter(work);
    }
    var tag_list = [
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
      $.each(tag_list, function(i, value) {
      	$(".shots--li img").eq(i).attr("src", value);
      });
  });
})();