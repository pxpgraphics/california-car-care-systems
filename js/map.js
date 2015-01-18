function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapLocation = new google.maps.LatLng(37.7393542,-122.2016592);
    var mapOptions = {
        center: mapLocation,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };
    var mapStyles = [
        {
            stylers: [
                { saturation: -100 }
            ]
        }
    ];
    var map = new google.maps.Map(mapCanvas, mapOptions);
    map.set('styles', mapStyles);
    var mapMarker = new google.maps.Marker({
        position: mapLocation,
        map: map,
        title: 'California Car Care Systems'
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
