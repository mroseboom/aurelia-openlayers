import * as ol from 'openlayers';

export interface MapSettings {
    layers: ol.layer.Base[];
}

export class DefaultMapSettings implements MapSettings {
    [setting: string]: any;
    public layers = [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ];
}
