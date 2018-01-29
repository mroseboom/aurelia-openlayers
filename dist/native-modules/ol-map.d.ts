/// <reference types="openlayers" />
import { DefaultMapSettings } from './ol-map-defaults';
import { OlMapService } from './services/ol-map-service';
import Map from 'ol/map';
export declare class OlMap {
    private settings;
    private olMapService;
    map: Map;
    private mapReference;
    constructor(settings: DefaultMapSettings, olMapService: OlMapService);
    attached(): void;
}
