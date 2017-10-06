import { DefaultMapSettings } from './ol-map-defaults';
import { OlMapService } from './services/ol-map-service';
export declare class OlMap {
    private settings;
    private olMapService;
    private mapReference;
    private map;
    constructor(settings: DefaultMapSettings, olMapService: OlMapService);
    attached(): void;
}
