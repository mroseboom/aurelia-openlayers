import { OlMapService } from './services/ol-map-service';
import { MapOptions } from 'ol/PluggableMap';
import Map from 'ol/Map';
export declare class OlMap {
    private defaultSettings;
    private olMapService;
    map: Map;
    private mapReference;
    constructor(defaultSettings: MapOptions, olMapService: OlMapService);
    attached(): void;
    detached(): void;
}
