var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, inject, inlineView } from 'aurelia-framework';
import Map from 'ol/map';
import { DefaultMapSettings } from './ol-map-defaults';
import { OlMapService } from './services/ol-map-service';
var OlMap = /** @class */ (function () {
    function OlMap(defaultSettings, olMapService) {
        this.defaultSettings = defaultSettings;
        this.olMapService = olMapService;
    }
    OlMap.prototype.attached = function () {
        this.map = new Map(__assign({}, this.defaultSettings, { target: this.mapReference }));
        this.olMapService.registerMap(this);
    };
    OlMap.prototype.detached = function () {
        this.olMapService.removeMap();
    };
    OlMap = __decorate([
        inlineView("<template><div ref=\"mapReference\"><slot></slot></div></template>"),
        customElement('ol-map'),
        inject(DefaultMapSettings, OlMapService)
    ], OlMap);
    return OlMap;
}());
export { OlMap };
