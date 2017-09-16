var carto_dark_all = new ol.layer.Tile({
    title: "Carto Dark",
    type: "base",
    source: new ol.source.OSM({
        url: "http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
    })
});

var basemaps = new ol.layer.Group({
    title: "Basemaps",
    layers: [
        carto_dark_all
    ]
});

var layers = [
    basemaps
];

var view = new ol.View({
    center: ol.proj.fromLonLat([-119, 35]),
    zoom: 6,
    minZoom: 2
});

var map = new ol.Map({
    target: 'map',
    layers: layers,
    view: view
});

// var switcher = new ol.control.LayerSwitcher();
//
// map.addControl(switcher);

