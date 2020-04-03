var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ne_10m_admin_0_countries_1 = new ol.format.GeoJSON();
var features_ne_10m_admin_0_countries_1 = format_ne_10m_admin_0_countries_1.readFeatures(json_ne_10m_admin_0_countries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_admin_0_countries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_admin_0_countries_1.addFeatures(features_ne_10m_admin_0_countries_1);
var lyr_ne_10m_admin_0_countries_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_admin_0_countries_1, 
                style: style_ne_10m_admin_0_countries_1,
                interactive: false,
                title: '<img src="styles/legend/ne_10m_admin_0_countries_1.png" /> ne_10m_admin_0_countries'
            });
var format_zone_risque_adm3_Pakistan_2 = new ol.format.GeoJSON();
var features_zone_risque_adm3_Pakistan_2 = format_zone_risque_adm3_Pakistan_2.readFeatures(json_zone_risque_adm3_Pakistan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zone_risque_adm3_Pakistan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zone_risque_adm3_Pakistan_2.addFeatures(features_zone_risque_adm3_Pakistan_2);
var lyr_zone_risque_adm3_Pakistan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zone_risque_adm3_Pakistan_2, 
                style: style_zone_risque_adm3_Pakistan_2,
                interactive: true,
                title: '<img src="styles/legend/zone_risque_adm3_Pakistan_2.png" /> zone_risque_adm3_Pakistan'
            });
var format_Listedesvillesenzonesrisque_3 = new ol.format.GeoJSON();
var features_Listedesvillesenzonesrisque_3 = format_Listedesvillesenzonesrisque_3.readFeatures(json_Listedesvillesenzonesrisque_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Listedesvillesenzonesrisque_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Listedesvillesenzonesrisque_3.addFeatures(features_Listedesvillesenzonesrisque_3);
var lyr_Listedesvillesenzonesrisque_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Listedesvillesenzonesrisque_3,
maxResolution:4344.332834200398,
 
                style: style_Listedesvillesenzonesrisque_3,
                interactive: true,
    title: 'Liste des villes en zones à risque<br />\
    <img src="styles/legend/Listedesvillesenzonesrisque_3_0.png" /> 0 - 2324844 <br />\
    <img src="styles/legend/Listedesvillesenzonesrisque_3_1.png" /> 2324844 - 4649688 <br />\
    <img src="styles/legend/Listedesvillesenzonesrisque_3_2.png" /> 4649688 - 6974531 <br />\
    <img src="styles/legend/Listedesvillesenzonesrisque_3_3.png" /> 6974531 - 9299375 <br />\
    <img src="styles/legend/Listedesvillesenzonesrisque_3_4.png" /> 9299375 - 11624219 <br />'
        });
var format_Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_listedesvilles_4 = new ol.format.GeoJSON();
var features_Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_listedesvilles_4 = format_Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_listedesvilles_4.readFeatures(json_Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_listedesvilles_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_listedesvilles_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_listedesvilles_4.addFeatures(features_Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_listedesvilles_4);
var lyr_Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_listedesvilles_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_listedesvilles_4, 
                style: style_Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_listedesvilles_4,
                interactive: false,
                title: '<img src="styles/legend/Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_listedesvilles_4.png" /> Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_liste des villes'
            });
var format_Etendue_inondation_EPSG3857_5 = new ol.format.GeoJSON();
var features_Etendue_inondation_EPSG3857_5 = format_Etendue_inondation_EPSG3857_5.readFeatures(json_Etendue_inondation_EPSG3857_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etendue_inondation_EPSG3857_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etendue_inondation_EPSG3857_5.addFeatures(features_Etendue_inondation_EPSG3857_5);
var lyr_Etendue_inondation_EPSG3857_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Etendue_inondation_EPSG3857_5, 
                style: style_Etendue_inondation_EPSG3857_5,
                interactive: false,
                title: '<img src="styles/legend/Etendue_inondation_EPSG3857_5.png" /> Etendue_inondation_EPSG3857'
            });
var format_zonedtude_6 = new ol.format.GeoJSON();
var features_zonedtude_6 = format_zonedtude_6.readFeatures(json_zonedtude_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonedtude_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonedtude_6.addFeatures(features_zonedtude_6);
var lyr_zonedtude_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zonedtude_6, 
                style: style_zonedtude_6,
                interactive: false,
                title: '<img src="styles/legend/zonedtude_6.png" /> zone d\'étude'
            });
var format_ne_10m_rivers_lake_centerlines_7 = new ol.format.GeoJSON();
var features_ne_10m_rivers_lake_centerlines_7 = format_ne_10m_rivers_lake_centerlines_7.readFeatures(json_ne_10m_rivers_lake_centerlines_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_rivers_lake_centerlines_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_rivers_lake_centerlines_7.addFeatures(features_ne_10m_rivers_lake_centerlines_7);
var lyr_ne_10m_rivers_lake_centerlines_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_rivers_lake_centerlines_7, 
                style: style_ne_10m_rivers_lake_centerlines_7,
                interactive: true,
                title: '<img src="styles/legend/ne_10m_rivers_lake_centerlines_7.png" /> ne_10m_rivers_lake_centerlines'
            });
var format_drivation_optionnelle_8 = new ol.format.GeoJSON();
var features_drivation_optionnelle_8 = format_drivation_optionnelle_8.readFeatures(json_drivation_optionnelle_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drivation_optionnelle_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drivation_optionnelle_8.addFeatures(features_drivation_optionnelle_8);
var lyr_drivation_optionnelle_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_drivation_optionnelle_8, 
                style: style_drivation_optionnelle_8,
                interactive: false,
                title: '<img src="styles/legend/drivation_optionnelle_8.png" /> dérivation_optionnelle'
            });
var format_Mask_9 = new ol.format.GeoJSON();
var features_Mask_9 = format_Mask_9.readFeatures(json_Mask_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mask_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mask_9.addFeatures(features_Mask_9);
var lyr_Mask_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mask_9, 
                style: style_Mask_9,
                interactive: false,
                title: 'Mask'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ne_10m_admin_0_countries_1.setVisible(true);lyr_zone_risque_adm3_Pakistan_2.setVisible(true);lyr_Listedesvillesenzonesrisque_3.setVisible(true);lyr_Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_listedesvilles_4.setVisible(true);lyr_Etendue_inondation_EPSG3857_5.setVisible(false);lyr_zonedtude_6.setVisible(true);lyr_ne_10m_rivers_lake_centerlines_7.setVisible(true);lyr_drivation_optionnelle_8.setVisible(true);lyr_Mask_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ne_10m_admin_0_countries_1,lyr_zone_risque_adm3_Pakistan_2,lyr_Listedesvillesenzonesrisque_3,lyr_Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_listedesvilles_4,lyr_Etendue_inondation_EPSG3857_5,lyr_zonedtude_6,lyr_ne_10m_rivers_lake_centerlines_7,lyr_drivation_optionnelle_8,lyr_Mask_9];
lyr_ne_10m_admin_0_countries_1.set('fieldAliases', {'featurecla': 'featurecla', 'scalerank': 'scalerank', 'LABELRANK': 'LABELRANK', 'SOVEREIGNT': 'SOVEREIGNT', 'SOV_A3': 'SOV_A3', 'ADM0_DIF': 'ADM0_DIF', 'LEVEL': 'LEVEL', 'TYPE': 'TYPE', 'ADMIN': 'ADMIN', 'ADM0_A3': 'ADM0_A3', 'GEOU_DIF': 'GEOU_DIF', 'GEOUNIT': 'GEOUNIT', 'GU_A3': 'GU_A3', 'SU_DIF': 'SU_DIF', 'SUBUNIT': 'SUBUNIT', 'SU_A3': 'SU_A3', 'BRK_DIFF': 'BRK_DIFF', 'NAME': 'NAME', 'NAME_LONG': 'NAME_LONG', 'BRK_A3': 'BRK_A3', 'BRK_NAME': 'BRK_NAME', 'BRK_GROUP': 'BRK_GROUP', 'ABBREV': 'ABBREV', 'POSTAL': 'POSTAL', 'FORMAL_EN': 'FORMAL_EN', 'FORMAL_FR': 'FORMAL_FR', 'NAME_CIAWF': 'NAME_CIAWF', 'NOTE_ADM0': 'NOTE_ADM0', 'NOTE_BRK': 'NOTE_BRK', 'NAME_SORT': 'NAME_SORT', 'NAME_ALT': 'NAME_ALT', 'MAPCOLOR7': 'MAPCOLOR7', 'MAPCOLOR8': 'MAPCOLOR8', 'MAPCOLOR9': 'MAPCOLOR9', 'MAPCOLOR13': 'MAPCOLOR13', 'POP_EST': 'POP_EST', 'POP_RANK': 'POP_RANK', 'GDP_MD_EST': 'GDP_MD_EST', 'POP_YEAR': 'POP_YEAR', 'LASTCENSUS': 'LASTCENSUS', 'GDP_YEAR': 'GDP_YEAR', 'ECONOMY': 'ECONOMY', 'INCOME_GRP': 'INCOME_GRP', 'WIKIPEDIA': 'WIKIPEDIA', 'FIPS_10_': 'FIPS_10_', 'ISO_A2': 'ISO_A2', 'ISO_A3': 'ISO_A3', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'WOE_ID': 'WOE_ID', 'WOE_ID_EH': 'WOE_ID_EH', 'WOE_NOTE': 'WOE_NOTE', 'ADM0_A3_IS': 'ADM0_A3_IS', 'ADM0_A3_US': 'ADM0_A3_US', 'ADM0_A3_UN': 'ADM0_A3_UN', 'ADM0_A3_WB': 'ADM0_A3_WB', 'CONTINENT': 'CONTINENT', 'REGION_UN': 'REGION_UN', 'SUBREGION': 'SUBREGION', 'REGION_WB': 'REGION_WB', 'NAME_LEN': 'NAME_LEN', 'LONG_LEN': 'LONG_LEN', 'ABBREV_LEN': 'ABBREV_LEN', 'TINY': 'TINY', 'HOMEPART': 'HOMEPART', 'MIN_ZOOM': 'MIN_ZOOM', 'MIN_LABEL': 'MIN_LABEL', 'MAX_LABEL': 'MAX_LABEL', 'NE_ID': 'NE_ID', 'WIKIDATAID': 'WIKIDATAID', 'NAME_AR': 'NAME_AR', 'NAME_BN': 'NAME_BN', 'NAME_DE': 'NAME_DE', 'NAME_EN': 'NAME_EN', 'NAME_ES': 'NAME_ES', 'NAME_FR': 'NAME_FR', 'NAME_EL': 'NAME_EL', 'NAME_HI': 'NAME_HI', 'NAME_HU': 'NAME_HU', 'NAME_ID': 'NAME_ID', 'NAME_IT': 'NAME_IT', 'NAME_JA': 'NAME_JA', 'NAME_KO': 'NAME_KO', 'NAME_NL': 'NAME_NL', 'NAME_PL': 'NAME_PL', 'NAME_PT': 'NAME_PT', 'NAME_RU': 'NAME_RU', 'NAME_SV': 'NAME_SV', 'NAME_TR': 'NAME_TR', 'NAME_VI': 'NAME_VI', 'NAME_ZH': 'NAME_ZH', });
lyr_zone_risque_adm3_Pakistan_2.set('fieldAliases', {'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', 'TYPE_3': 'TYPE_3', 'aire Km2': 'aire Km2', 'aire ha': 'aire ha', });
lyr_Listedesvillesenzonesrisque_3.set('fieldAliases', {'nom de la': 'nom de la', 'population': 'population', 'location y': 'location y', 'location x': 'location x', });
lyr_Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_listedesvilles_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Area_m2': 'Area_m2', 'Area_ha': 'Area_ha', 'EventCode': 'EventCode', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', 'TYPE_3': 'TYPE_3', 'aire Km2': 'aire Km2', 'aire ha': 'aire ha', 'J1_nom de': 'J1_nom de', 'J1_populat': 'J1_populat', 'J1_locatio': 'J1_locatio', 'J1_locat_1': 'J1_locat_1', 'distance': 'distance', });
lyr_Etendue_inondation_EPSG3857_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Water_Clas': 'Water_Clas', 'Sensor_ID': 'Sensor_ID', 'Sensor_Dat': 'Sensor_Dat', 'Confidence': 'Confidence', 'Field_Vali': 'Field_Vali', 'Water_Stat': 'Water_Stat', 'Notes': 'Notes', 'Area_m2': 'Area_m2', 'Area_ha': 'Area_ha', 'EventCode': 'EventCode', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_zonedtude_6.set('fieldAliases', {'id': 'id', });
lyr_ne_10m_rivers_lake_centerlines_7.set('fieldAliases', {'dissolve': 'dissolve', 'scalerank': 'scalerank', 'featurecla': 'featurecla', 'name': 'name', 'name_alt': 'name_alt', 'rivernum': 'rivernum', 'note': 'note', 'min_zoom': 'min_zoom', 'name_en': 'name_en', 'min_label': 'min_label', 'label': 'label', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'wdid_score': 'wdid_score', 'ne_id': 'ne_id', });
lyr_drivation_optionnelle_8.set('fieldAliases', {'id': 'id', });
lyr_Mask_9.set('fieldAliases', {'params': 'params', });
lyr_ne_10m_admin_0_countries_1.set('fieldImages', {'featurecla': 'TextEdit', 'scalerank': 'Range', 'LABELRANK': 'Range', 'SOVEREIGNT': 'TextEdit', 'SOV_A3': 'TextEdit', 'ADM0_DIF': 'Range', 'LEVEL': 'Range', 'TYPE': 'TextEdit', 'ADMIN': 'TextEdit', 'ADM0_A3': 'TextEdit', 'GEOU_DIF': 'Range', 'GEOUNIT': 'TextEdit', 'GU_A3': 'TextEdit', 'SU_DIF': 'Range', 'SUBUNIT': 'TextEdit', 'SU_A3': 'TextEdit', 'BRK_DIFF': 'Range', 'NAME': 'TextEdit', 'NAME_LONG': 'TextEdit', 'BRK_A3': 'TextEdit', 'BRK_NAME': 'TextEdit', 'BRK_GROUP': 'TextEdit', 'ABBREV': 'TextEdit', 'POSTAL': 'TextEdit', 'FORMAL_EN': 'TextEdit', 'FORMAL_FR': 'TextEdit', 'NAME_CIAWF': 'TextEdit', 'NOTE_ADM0': 'TextEdit', 'NOTE_BRK': 'TextEdit', 'NAME_SORT': 'TextEdit', 'NAME_ALT': 'TextEdit', 'MAPCOLOR7': 'Range', 'MAPCOLOR8': 'TextEdit', 'MAPCOLOR9': 'Range', 'MAPCOLOR13': 'Range', 'POP_EST': 'TextEdit', 'POP_RANK': 'Range', 'GDP_MD_EST': 'TextEdit', 'POP_YEAR': 'Range', 'LASTCENSUS': 'Range', 'GDP_YEAR': 'Range', 'ECONOMY': 'TextEdit', 'INCOME_GRP': 'TextEdit', 'WIKIPEDIA': 'Range', 'FIPS_10_': 'TextEdit', 'ISO_A2': 'TextEdit', 'ISO_A3': 'TextEdit', 'ISO_A3_EH': 'TextEdit', 'ISO_N3': 'TextEdit', 'UN_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'WOE_ID': 'Range', 'WOE_ID_EH': 'Range', 'WOE_NOTE': 'TextEdit', 'ADM0_A3_IS': 'TextEdit', 'ADM0_A3_US': 'TextEdit', 'ADM0_A3_UN': 'Range', 'ADM0_A3_WB': 'Range', 'CONTINENT': 'TextEdit', 'REGION_UN': 'TextEdit', 'SUBREGION': 'TextEdit', 'REGION_WB': 'TextEdit', 'NAME_LEN': 'Range', 'LONG_LEN': 'Range', 'ABBREV_LEN': 'Range', 'TINY': 'Range', 'HOMEPART': 'Range', 'MIN_ZOOM': 'TextEdit', 'MIN_LABEL': 'TextEdit', 'MAX_LABEL': 'TextEdit', 'NE_ID': 'TextEdit', 'WIKIDATAID': 'TextEdit', 'NAME_AR': 'TextEdit', 'NAME_BN': 'TextEdit', 'NAME_DE': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_ES': 'TextEdit', 'NAME_FR': 'TextEdit', 'NAME_EL': 'TextEdit', 'NAME_HI': 'TextEdit', 'NAME_HU': 'TextEdit', 'NAME_ID': 'TextEdit', 'NAME_IT': 'TextEdit', 'NAME_JA': 'TextEdit', 'NAME_KO': 'TextEdit', 'NAME_NL': 'TextEdit', 'NAME_PL': 'TextEdit', 'NAME_PT': 'TextEdit', 'NAME_RU': 'TextEdit', 'NAME_SV': 'TextEdit', 'NAME_TR': 'TextEdit', 'NAME_VI': 'TextEdit', 'NAME_ZH': 'TextEdit', });
lyr_zone_risque_adm3_Pakistan_2.set('fieldImages', {'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'aire Km2': 'TextEdit', 'aire ha': 'TextEdit', });
lyr_Listedesvillesenzonesrisque_3.set('fieldImages', {'nom de la': 'TextEdit', 'population': 'TextEdit', 'location y': 'TextEdit', 'location x': 'TextEdit', });
lyr_Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_listedesvilles_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Area_m2': 'TextEdit', 'Area_ha': 'TextEdit', 'EventCode': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'aire Km2': 'TextEdit', 'aire ha': 'TextEdit', 'J1_nom de': '', 'J1_populat': '', 'J1_locatio': '', 'J1_locat_1': '', 'distance': 'TextEdit', });
lyr_Etendue_inondation_EPSG3857_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Water_Clas': 'Range', 'Sensor_ID': 'TextEdit', 'Sensor_Dat': 'DateTime', 'Confidence': 'Range', 'Field_Vali': 'Range', 'Water_Stat': 'TextEdit', 'Notes': 'TextEdit', 'Area_m2': 'TextEdit', 'Area_ha': 'TextEdit', 'EventCode': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_zonedtude_6.set('fieldImages', {'id': 'TextEdit', });
lyr_ne_10m_rivers_lake_centerlines_7.set('fieldImages', {'dissolve': 'TextEdit', 'scalerank': 'TextEdit', 'featurecla': 'TextEdit', 'name': 'TextEdit', 'name_alt': 'TextEdit', 'rivernum': 'TextEdit', 'note': 'TextEdit', 'min_zoom': 'TextEdit', 'name_en': 'TextEdit', 'min_label': 'TextEdit', 'label': 'TextEdit', 'wikidataid': 'TextEdit', 'name_ar': 'TextEdit', 'name_bn': 'TextEdit', 'name_de': 'TextEdit', 'name_es': 'TextEdit', 'name_fr': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'name_hu': 'TextEdit', 'name_id': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ko': 'TextEdit', 'name_nl': 'TextEdit', 'name_pl': 'TextEdit', 'name_pt': 'TextEdit', 'name_ru': 'TextEdit', 'name_sv': 'TextEdit', 'name_tr': 'TextEdit', 'name_vi': 'TextEdit', 'name_zh': 'TextEdit', 'wdid_score': 'Range', 'ne_id': 'TextEdit', });
lyr_drivation_optionnelle_8.set('fieldImages', {'id': 'TextEdit', });
lyr_Mask_9.set('fieldImages', {'params': '', });
lyr_ne_10m_admin_0_countries_1.set('fieldLabels', {'featurecla': 'no label', 'scalerank': 'no label', 'LABELRANK': 'no label', 'SOVEREIGNT': 'no label', 'SOV_A3': 'no label', 'ADM0_DIF': 'no label', 'LEVEL': 'no label', 'TYPE': 'no label', 'ADMIN': 'no label', 'ADM0_A3': 'no label', 'GEOU_DIF': 'no label', 'GEOUNIT': 'no label', 'GU_A3': 'no label', 'SU_DIF': 'no label', 'SUBUNIT': 'no label', 'SU_A3': 'no label', 'BRK_DIFF': 'no label', 'NAME': 'no label', 'NAME_LONG': 'no label', 'BRK_A3': 'no label', 'BRK_NAME': 'no label', 'BRK_GROUP': 'no label', 'ABBREV': 'no label', 'POSTAL': 'no label', 'FORMAL_EN': 'no label', 'FORMAL_FR': 'no label', 'NAME_CIAWF': 'no label', 'NOTE_ADM0': 'no label', 'NOTE_BRK': 'no label', 'NAME_SORT': 'no label', 'NAME_ALT': 'no label', 'MAPCOLOR7': 'no label', 'MAPCOLOR8': 'no label', 'MAPCOLOR9': 'no label', 'MAPCOLOR13': 'no label', 'POP_EST': 'no label', 'POP_RANK': 'no label', 'GDP_MD_EST': 'no label', 'POP_YEAR': 'no label', 'LASTCENSUS': 'no label', 'GDP_YEAR': 'no label', 'ECONOMY': 'no label', 'INCOME_GRP': 'no label', 'WIKIPEDIA': 'no label', 'FIPS_10_': 'no label', 'ISO_A2': 'no label', 'ISO_A3': 'no label', 'ISO_A3_EH': 'no label', 'ISO_N3': 'no label', 'UN_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'WOE_ID': 'no label', 'WOE_ID_EH': 'no label', 'WOE_NOTE': 'no label', 'ADM0_A3_IS': 'no label', 'ADM0_A3_US': 'no label', 'ADM0_A3_UN': 'no label', 'ADM0_A3_WB': 'no label', 'CONTINENT': 'no label', 'REGION_UN': 'no label', 'SUBREGION': 'no label', 'REGION_WB': 'no label', 'NAME_LEN': 'no label', 'LONG_LEN': 'no label', 'ABBREV_LEN': 'no label', 'TINY': 'no label', 'HOMEPART': 'no label', 'MIN_ZOOM': 'no label', 'MIN_LABEL': 'no label', 'MAX_LABEL': 'no label', 'NE_ID': 'no label', 'WIKIDATAID': 'no label', 'NAME_AR': 'no label', 'NAME_BN': 'no label', 'NAME_DE': 'no label', 'NAME_EN': 'no label', 'NAME_ES': 'no label', 'NAME_FR': 'no label', 'NAME_EL': 'no label', 'NAME_HI': 'no label', 'NAME_HU': 'no label', 'NAME_ID': 'no label', 'NAME_IT': 'no label', 'NAME_JA': 'no label', 'NAME_KO': 'no label', 'NAME_NL': 'no label', 'NAME_PL': 'no label', 'NAME_PT': 'no label', 'NAME_RU': 'no label', 'NAME_SV': 'no label', 'NAME_TR': 'no label', 'NAME_VI': 'no label', 'NAME_ZH': 'no label', });
lyr_zone_risque_adm3_Pakistan_2.set('fieldLabels', {'NAME_1': 'no label', 'NAME_2': 'no label', 'NAME_3': 'no label', 'TYPE_3': 'no label', 'aire Km2': 'header label', 'aire ha': 'no label', });
lyr_Listedesvillesenzonesrisque_3.set('fieldLabels', {'nom de la': 'header label', 'population': 'inline label', 'location y': 'no label', 'location x': 'no label', });
lyr_Intersection_zone_risque_adm3_Pakistan_Etendue_inondation_tampon_7km_listedesvilles_4.set('fieldLabels', {'OBJECTID': 'no label', 'Area_m2': 'no label', 'Area_ha': 'inline label', 'EventCode': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'NAME_1': 'no label', 'NAME_2': 'no label', 'NAME_3': 'no label', 'TYPE_3': 'no label', 'aire Km2': 'no label', 'aire ha': 'no label', 'J1_nom de': 'no label', 'J1_populat': 'no label', 'J1_locatio': 'no label', 'J1_locat_1': 'no label', 'distance': 'no label', });
lyr_Etendue_inondation_EPSG3857_5.set('fieldLabels', {'OBJECTID': 'no label', 'Water_Clas': 'no label', 'Sensor_ID': 'no label', 'Sensor_Dat': 'no label', 'Confidence': 'no label', 'Field_Vali': 'no label', 'Water_Stat': 'no label', 'Notes': 'no label', 'Area_m2': 'no label', 'Area_ha': 'no label', 'EventCode': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_zonedtude_6.set('fieldLabels', {'id': 'no label', });
lyr_ne_10m_rivers_lake_centerlines_7.set('fieldLabels', {'dissolve': 'no label', 'scalerank': 'no label', 'featurecla': 'no label', 'name': 'no label', 'name_alt': 'no label', 'rivernum': 'no label', 'note': 'no label', 'min_zoom': 'no label', 'name_en': 'no label', 'min_label': 'no label', 'label': 'no label', 'wikidataid': 'no label', 'name_ar': 'no label', 'name_bn': 'no label', 'name_de': 'no label', 'name_es': 'no label', 'name_fr': 'header label', 'name_el': 'no label', 'name_hi': 'no label', 'name_hu': 'no label', 'name_id': 'no label', 'name_it': 'no label', 'name_ja': 'no label', 'name_ko': 'no label', 'name_nl': 'no label', 'name_pl': 'no label', 'name_pt': 'no label', 'name_ru': 'no label', 'name_sv': 'no label', 'name_tr': 'no label', 'name_vi': 'no label', 'name_zh': 'no label', 'wdid_score': 'no label', 'ne_id': 'no label', });
lyr_drivation_optionnelle_8.set('fieldLabels', {'id': 'no label', });
lyr_Mask_9.set('fieldLabels', {'params': 'no label', });
lyr_Mask_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});