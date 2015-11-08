/*
 * Simple duplicate
 */
$(document).ready(function() {
  var clone_element = $('.element');
  for (var i = 0; i < 9; i++) {
    clone_element.clone().insertAfter(clone_element);
  }
});

/*
 * Duplicate and modify img
 */
$(document).ready(function() {
  var clone_img = $('.element');
  // shots list (11+1 img)
  for (var i = 0; i < 9; i++) {
    clone_img.clone().insertAfter(clone_img);
  }
  var img_list = [
      "../../assets/img/dribble_01.png",
      "../../assets/img/dribble_02.png",
      "../../assets/img/dribble_03.png",
      "../../assets/img/dribble_04.png",
      "../../assets/img/dribble_05.png",
      "../../assets/img/dribble_06.png",
      "../../assets/img/dribble_07.png",
      "../../assets/img/dribble_08.png",
      "../../assets/img/dribble_09.png",
      "../../assets/img/dribble_010.png",
  ];
  $.each(img_list, function(i, value) {
    $(".element img").eq(i).attr("src", value);
  });
});

/*
 * Duplicate and modify html values
 */
 $(document).ready(function() {
  var clone_element = $('.element');
  // shots list (11+1 img)
  for (var i = 0; i < 11; i++) {
    clone_element.clone().insertAfter(clone_element);
  }
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
  ];
  $.each(title_list, function(i, value) {
    $(".element__title").eq(i).html(value);
  });
});