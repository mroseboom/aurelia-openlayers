/// <reference types="openlayers" />
import * as ol from 'openlayers';
export interface MapSettings {
    layers: ol.layer.Base[];
}
export declare class DefaultMapSettings implements MapSettings {
    [setting: string]: any;
    layers: ol.layer.Tile[];
}
