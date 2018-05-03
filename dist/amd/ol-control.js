var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "ol/control/attribution", "ol/control/fullscreen", "ol/control/mouseposition", "ol/control/overviewmap", "ol/control/rotate", "ol/control/scaleline", "ol/control/zoom", "ol/control/zoomslider", "ol/control/zoomtoextent"], function (require, exports, aurelia_framework_1, attribution_1, fullscreen_1, mouseposition_1, overviewmap_1, rotate_1, scaleline_1, zoom_1, zoomslider_1, zoomtoextent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OlControlTypes = {
        attribution: attribution_1.default,
        fullscreen: fullscreen_1.default,
        mouseposition: mouseposition_1.default,
        overviewmap: overviewmap_1.default,
        rotate: rotate_1.default,
        scaleline: scaleline_1.default,
        zoom: zoom_1.default,
        zoomslider: zoomslider_1.default,
        zoomtoextent: zoomtoextent_1.default
    };
    var OlControl = /** @class */ (function () {
        function OlControl(olMapService) {
            this.olMapService = olMapService;
        }
        OlControl.prototype.attached = function () {
            var _this = this;
            this.olMapService.getMap().then(function (_a) {
                var map = _a.map;
                var control = exports.OlControlTypes[_this.control];
                if (control) {
                    map.addControl(control);
                }
            });
        };
        __decorate([
            aurelia_framework_1.bindable()
        ], OlControl.prototype, "control", void 0);
        OlControl = __decorate([
            aurelia_framework_1.customElement('ol-control'),
            aurelia_framework_1.noView(),
            aurelia_framework_1.autoinject()
        ], OlControl);
        return OlControl;
    }());
    exports.OlControl = OlControl;
});
