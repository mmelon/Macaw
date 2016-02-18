// https://developers.google.com/maps/documentation/javascript/
  var myLatLng = {lat: 48.875272, lng: 2.332642};
//   var map;
//   function initialize() {
//   var mapOptions = new google.maps.Map(document.getElementById('map'), {
//     zoom: 17,
//     center: myLatLng,
//     draggable: true,
//     scrollwheel: true,
//     disableDefaultUI: true,
//     styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":60}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]}]
//   });
//   google.maps.event.addDomListener(window, 'load', initialize);
//   google.maps.event.addDomListener(window, "resize", function() {
//     var center = map.getCenter();
//     google.maps.event.trigger(map, "resize");
//     map.setCenter(center); 
//     //map.setZoom(zoom level needs to be automatically set according to window size);
// });

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatLng,
    draggable: true,
    scrollwheel: true,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":60}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]}]
  });

// var goldStar = {
//   path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
//   fillColor: 'yellow',
//   fillOpacity: 0.8,
//   scale: 1,
//   strokeColor: 'gold',
//   strokeWeight: 14
// };

// var marker = new google.maps.Marker({
//   position: myLatLng,
//   icon: goldStar,
//   map: map,
//   title: 'Hello World!'
// });

var image = {
  //url: 'http://maboitenoire.com/assets/svg/sprite.svg',
  url: '../img/sprite.svg',
  size: new google.maps.Size(52, 64),
  origin: new google.maps.Point(104, 0),
  anchor: new google.maps.Point(0, 54),
  scaledSize: new google.maps.Size(600, 144) // double the size of the png 300/72
};

// var image = new google.maps.MarkerImage(
//   'sprite.svg',
//   new google.maps.Size(26, 32),
//   new google.maps.Point(0, 0), //origin
//   new google.maps.Point(0, 25) //anchor point
//   );
//var image = 'https://upload.wikimedia.org/wikipedia/commons/9/93/Map_marker_font_awesome.svg';
var teamarker = new google.maps.Marker({
  position: myLatLng,
  animation: google.maps.Animation.DROP,
  map: map,
  icon: image
});
// window.onresize = resize;

// function resize()
// {
//  google.maps.event.trigger(map, 'resize');
//  alert("resize event detected!");
// }
window.onresize = function(){var currCenter = map.getCenter();google.maps.event.trigger(map, 'resize');map.setCenter(currCenter);
};
}
// function toggleBounce() {

//   if (teamarker.getAnimation() != null) {
//     teamarker.setAnimation(null);
//   } else {
//     teamarker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }


