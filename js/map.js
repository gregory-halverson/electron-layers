var carto_dark_all = new ol.layer.Tile({
    source: new ol.source.OSM({
        url: "http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
    })
});

var view = new ol.View({
    center: ol.proj.fromLonLat([-119, 35]),
    zoom: 6,
    minZoom: 2
});

var layers = [
    carto_dark_all
];

var map = new ol.Map({
    target: 'map',
    layers: layers,
    view: view
});