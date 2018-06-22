import { OlMapService } from './services/ol-map-service';
import Map from 'ol/Map';
export declare class OlMap {
    private defaultSettings;
    private olMapService;
    map: Map;
    private mapReference;
    constructor(defaultSettings: ol.olx.MapOptions, olMapService: OlMapService);
    attached(): void;
    detached(): void;
}
