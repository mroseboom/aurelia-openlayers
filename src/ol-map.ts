import { inject, customElement } from "aurelia-framework";
import { DefaultMapSettings } from './ol-map-defaults';

import * as ol from 'openlayers';

@customElement('ol-map')
@inject(DefaultMapSettings)
export class OlMap {
    private mapReference: HTMLElement;
    private map: ol.Map;

    constructor(private settings: DefaultMapSettings) {

    }

    public attached(): void {
        this.map = new ol.Map({
            layers: this.settings.layers,
            target: this.mapReference,
            view: new ol.View({
                center: [0, 0],
                zoom: 2
            })
        });
    }
}
