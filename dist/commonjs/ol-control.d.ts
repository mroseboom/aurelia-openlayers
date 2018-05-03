import { OlMapService } from './services/ol-map-service';
export declare const OlControlTypes: {
    [key: string]: any;
};
export declare class OlControl {
    private olMapService;
    control: string;
    constructor(olMapService: OlMapService);
    attached(): void;
}
