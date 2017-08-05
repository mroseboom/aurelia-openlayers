import { DefaultMapSettings } from './ol-map-defaults';
export declare class OlMap {
    private settings;
    private mapReference;
    private map;
    constructor(settings: DefaultMapSettings);
    attached(): void;
}
