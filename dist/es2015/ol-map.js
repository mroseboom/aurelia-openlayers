var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inject, customElement, inlineView } from 'aurelia-framework';
import { DefaultMapSettings } from './ol-map-defaults';
import { OlMapService } from './services/ol-map-service';
import * as ol from 'openlayers';
var OlMap = /** @class */ (function () {
    function OlMap(settings, olMapService) {
        this.settings = settings;
        this.olMapService = olMapService;
    }
    OlMap.prototype.attached = function () {
        this.map = new ol.Map({
            layers: this.settings.layers,
            target: this.mapReference,
            view: new ol.View({
                center: [0, 0],
                zoom: 2
            })
        });
        this.olMapService.registerMap(this);
    };
    OlMap = __decorate([
        inlineView("<template><div ref=\"mapReference\"></div></template>"),
        customElement('ol-map'),
        inject(DefaultMapSettings, OlMapService)
        // @generateBindables()
    ], OlMap);
    return OlMap;
}());
export { OlMap };
