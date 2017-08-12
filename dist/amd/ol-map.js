var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "./ol-map-defaults", "openlayers"], function (require, exports, aurelia_framework_1, ol_map_defaults_1, ol) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OlMap = (function () {
        function OlMap(settings) {
            this.settings = settings;
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
        };
        OlMap = __decorate([
            aurelia_framework_1.inlineView("<template><div ref=\"mapReference\"></div></template>"),
            aurelia_framework_1.customElement('ol-map'),
            aurelia_framework_1.inject(ol_map_defaults_1.DefaultMapSettings)
        ], OlMap);
        return OlMap;
    }());
    exports.OlMap = OlMap;
});
