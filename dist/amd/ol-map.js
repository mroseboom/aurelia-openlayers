var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "./ol-map-defaults", "./services/ol-map-service", "ol/Map"], function (require, exports, aurelia_framework_1, ol_map_defaults_1, ol_map_service_1, Map_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OlMap = /** @class */ (function () {
        function OlMap(defaultSettings, olMapService) {
            this.defaultSettings = defaultSettings;
            this.olMapService = olMapService;
        }
        OlMap.prototype.attached = function () {
            this.map = new Map_1.default(__assign({}, this.defaultSettings, { target: this.mapReference }));
            this.olMapService.registerMap(this);
        };
        OlMap.prototype.detached = function () {
            this.olMapService.removeMap();
        };
        OlMap = __decorate([
            aurelia_framework_1.inlineView("<template><div ref=\"mapReference\"><slot></slot></div></template>"),
            aurelia_framework_1.customElement('ol-map'),
            aurelia_framework_1.inject(ol_map_defaults_1.DefaultMapSettings, ol_map_service_1.OlMapService)
        ], OlMap);
        return OlMap;
    }());
    exports.OlMap = OlMap;
});
