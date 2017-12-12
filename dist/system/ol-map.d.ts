/// <reference types="openlayers" />
import { DefaultMapSettings } from './ol-map-defaults';
import { OlMapService } from './services/ol-map-service';
import * as ol from 'openlayers';
export declare class OlMap {
    private settings;
    private olMapService;
    map: ol.Map;
    private mapReference;
    constructor(settings: DefaultMapSettings, olMapService: OlMapService);
    attached(): void;
}
