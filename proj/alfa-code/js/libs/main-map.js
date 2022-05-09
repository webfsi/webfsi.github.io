// google map
function initMap(){
  var element = document.getElementById('mainMap');
  var options = {
    zoom: 15,
    center: {lat: 55.75, lng: 37.6167},
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
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "invert_lightness": true
                    },
                    {
                        "saturation": 10
                    },
                    {
                        "lightness": 30
                    },
                    {
                        "gamma": 0.5
                    },
                    {
                        "hue": "#435158"
                    }
                ]
            }
        ]
  };

  

  var myMap = new google.maps.Map(element, options);

  var iconImg = {
    url: 'img/icons/map-marker.png',
    size: new google.maps.Size(36, 36),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(18, 18),
  };

  addMarker({lat: 55.749766, lng: 37.613433});

  function addMarker(coordinates){
    var marker = new google.maps.Marker({
    position: coordinates,
    map: myMap,
    icon: iconImg
    });
  };

};
