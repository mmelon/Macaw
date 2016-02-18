// https://developers.google.com/maps/documentation/javascript/
  var myLatLng = {lat: 48.875272, lng: 2.332642};

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatLng,
    draggable: true,
    scrollwheel: true,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    // find more style on https://snazzymaps.com
    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#65c598"},{"visibility":"on"}]}]
  });
// Customize marker image
var image = {
  // url: 'http://maboitenoire.com/assets/svg/sprite.svg',
  url: 'sprite.svg',
  size: new google.maps.Size(52, 64),
  origin: new google.maps.Point(104, 0),
  anchor: new google.maps.Point(0, 54),
  scaledSize: new google.maps.Size(600, 144) // double the size of the png 300/72
};
var teamarker = new google.maps.Marker({
  position: myLatLng,
  animation: google.maps.Animation.DROP,
  map: map,
  icon: image
});

window.onresize = function(){var currCenter = map.getCenter();google.maps.event.trigger(map, 'resize');map.setCenter(currCenter);
};
}