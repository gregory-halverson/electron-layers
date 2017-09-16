var basemap = new ol.source.OSM({
    "url": "http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: basemap
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-119, 35]),
        zoom: 6,
        minZoom: 2
    })
});