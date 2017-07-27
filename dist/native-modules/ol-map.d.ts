import { MapSettings } from './ol-map-defaults';
export declare class OlMapCustomElement {
    private mapSettings;
    private mapReference;
    private map;
    constructor(mapSettings: MapSettings);
    attached(): void;
}
