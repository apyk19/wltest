var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr__1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ระดับลักษณะการใช้พื้นที่ของช้างป่า",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11232278.201918, 1567346.848883, 11491760.444112, 1645908.900701]
                            })
                        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> กลุ่มป่าดงพญาเย็น-เขาใหญ่'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr__2];
lyr__2.set('fieldAliases', {'Type_th': 'Type_th', 'Name_th': 'Name_th', 'forest_com': 'forest_com', 'no': 'no', 'name': 'name', });
lyr__2.set('fieldImages', {'Type_th': 'TextEdit', 'Name_th': 'TextEdit', 'forest_com': 'TextEdit', 'no': 'TextEdit', 'name': 'TextEdit', });
lyr__2.set('fieldLabels', {'Type_th': 'inline label', 'Name_th': 'inline label', 'forest_com': 'inline label', 'no': 'no label', 'name': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});