/// <reference types="openlayers" />
import Map from 'ol/map';
import { OlMapService } from './services/ol-map-service';
export declare class OlMap {
    private defaultSettings;
    private olMapService;
    map: Map;
    private mapReference;
    constructor(defaultSettings: olx.MapOptions, olMapService: OlMapService);
    attached(): void;
    detached(): void;
}
