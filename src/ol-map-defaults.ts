import Base from 'ol/layer/base';
import TileLayer from 'ol/layer/tile';
import OSM from 'ol/source/osm';

export interface MapSettings {
    layers: Base[];
}

export class DefaultMapSettings implements MapSettings {
    [setting: string]: any;
    public layers = [
        new TileLayer({
            source: new OSM()
        })
    ];
}
