function initMap(){
  var element = document.getElementById('mainMap');
  var options = {
    zoom: 13,
    center: {lat: 55.82010603663333, lng: 37.33247101306916},
    // disableDefaultUI: true,
    zoomControl: false,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    styles: [
      {
          "featureType": "administrative.country",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": "0"
              },
              {
                  "weight": "0.33"
              },
              {
                  "color": "#646464"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#969696"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "labels.text",
          "stylers": [
              {
                  "weight": "1.69"
              },
              {
                  "color": "#5f5c5c"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.land_parcel",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative.land_parcel",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "landscape.natural.landcover",
          "elementType": "geometry",
          "stylers": [
              {
                  "saturation": "6"
              },
              {
                  "weight": "1.25"
              }
          ]
      },
      {
          "featureType": "landscape.natural.terrain",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "saturation": "8"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "poi.attraction",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.government",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.medical",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.place_of_worship",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.school",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.sports_complex",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "transit.station",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": "-39"
              },
              {
                  "gamma": "0.83"
              },
              {
                  "hue": "#00cdff"
              },
              {
                  "lightness": "-2"
              }
          ]
      }
    ] 
  };

  var myMap = new google.maps.Map(element, options);

  var iconImg = {
    url: 'img/icons/marker-big.svg',
    size: new google.maps.Size(25, 35),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(13, 35),
  };

  addMarker({lat: 55.82010603663333, lng: 37.33247101306916});

  function addMarker(coordinates){
    var marker = new google.maps.Marker({
    position: coordinates,
    map: myMap,
    icon: iconImg
    });
  };

};