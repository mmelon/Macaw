(function() {


  /*
   * Google maps
   * Subtle Grayscale - http://snazzymaps.com/style/15/subtle-grayscale
   * by [Paulo Ávila](https://github.com/demoive/)
   */

  // When the window has finished loading create our google map below
  google.maps.event.addDomListener(window, 'load', init);

  function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 17,
      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(48.875272,2.332642), // Paris
      // Draggable or not
      draggable: false,
      // Zoom with scrollwheel
      scrollwheel: true,
      // Disable the UI
      disableDefaultUI: true,
      // Snazzy Maps
      // This is where you would paste any style found on Snazzy Maps.
      styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":60}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]}]
      // Snazzy Map - ends
    };
    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
  }
  /* Google maps - ends */
})();