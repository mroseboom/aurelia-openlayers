/// <reference types="openlayers" />
import Base from 'ol/layer/base';
import TileLayer from 'ol/layer/tile';
export interface MapSettings {
    layers: Base[];
}
export declare class DefaultMapSettings implements MapSettings {
    [setting: string]: any;
    layers: TileLayer[];
}
