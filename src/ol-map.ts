import { MapSettings } from './ol-map-defaults';

import * as ol from 'openlayers';

export class OlMapCustomElement {
    private mapReference: HTMLElement;
    private map: ol.Map;

    constructor(private mapSettings: MapSettings) { }

    public attached(): void {
        this.map = new ol.Map({
            layers: this.mapSettings.layers,
            target: this.mapReference,
            view: new ol.View({
                center: [0, 0],
                zoom: 2
            })
        });
    }
}
