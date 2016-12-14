$(document).foundation();

var elem = new Foundation.Sticky($('.top-bar'));

window.app = {
  apiUrl: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw',

  tileLayerOptions: {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
  },

  createMapSingleMarker: function(mapId, lat, lng, zoom, markerText) {
    var myMap = L.map(mapId).setView([lat, lng], zoom);

    L.tileLayer(window.app.apiUrl, window.app.tileLayerOptions).addTo(myMap);

    var marker = L.marker([lat - 0.0005, lng]).addTo(myMap);
    marker.bindPopup(markerText).openPopup();
  },

  createMapMultiMarker: function(mapId, lat, lng, zoom, markersArray) {
    var myMap = L.map(mapId).setView([lat, lng], zoom);

    L.tileLayer(window.app.apiUrl, window.app.tileLayerOptions).addTo(myMap);

    markersArray.forEach(function(markerVar) {
      var marker = L.marker([markerVar.lat, markerVar.lng]).addTo(myMap);
      marker.bindPopup(markerVar.markerText);
    });

    // myMap.invalidateSize(false);
  }

};
