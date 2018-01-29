import { inject, customElement, inlineView } from 'aurelia-framework';
import { DefaultMapSettings } from './ol-map-defaults';
import { OlMapService } from './services/ol-map-service';

import Map from 'ol/map';
import View from 'ol/view';

@inlineView(`<template><div ref="mapReference"></div></template>`)
@customElement('ol-map')
@inject(DefaultMapSettings, OlMapService)
export class OlMap {
    public map: Map;
    private mapReference: HTMLElement;

    constructor(private settings: DefaultMapSettings,
                private olMapService: OlMapService) {}

    public attached(): void {
        this.map = new Map({
            layers: this.settings.layers,
            target: this.mapReference,
            view: new View({
                center: [0, 0],
                zoom: 2
            })
        });

        this.olMapService.registerMap<OlMap>(this);

        // tslint:disable-next-line:no-console
        console.debug('map registered!');
    }
}
