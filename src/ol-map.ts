import { customElement, inject, inlineView } from 'aurelia-framework';
import { DefaultMapSettings } from './ol-map-defaults';
import { OlMapService } from './services/ol-map-service';
import Map from 'ol/Map';

@inlineView(`<template><div ref="mapReference"><slot></slot></div></template>`)
@customElement('ol-map')
@inject(DefaultMapSettings, OlMapService)
export class OlMap {
    public map: Map;
    private mapReference: HTMLElement;

    constructor(private defaultSettings: ol.olx.MapOptions,
                private olMapService: OlMapService) { }

    public attached(): void {
        this.map = new Map({
            ...this.defaultSettings,
            target: this.mapReference
        });

        this.olMapService.registerMap<OlMap>(this);
    }

    public detached(): void {
        this.olMapService.removeMap();
    }
}
