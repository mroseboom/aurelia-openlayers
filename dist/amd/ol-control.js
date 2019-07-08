var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "ol/control/Zoomtoextent", "ol/control/Scaleline", "aurelia-framework", "ol/control/Attribution", "ol/control/Fullscreen", "ol/control/Mouseposition", "ol/control/Overviewmap", "ol/control/Rotate", "ol/control/zoom", "ol/control/Zoomslider"], function (require, exports, Zoomtoextent_1, Scaleline_1, aurelia_framework_1, Attribution_1, Fullscreen_1, Mouseposition_1, Overviewmap_1, Rotate_1, zoom_1, Zoomslider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OlControlTypes = {
        attribution: Attribution_1.default,
        fullscreen: Fullscreen_1.default,
        mouseposition: Mouseposition_1.default,
        overviewmap: Overviewmap_1.default,
        rotate: Rotate_1.default,
        scaleline: Scaleline_1.default,
        zoom: zoom_1.default,
        zoomslider: Zoomslider_1.default,
        zoomtoextent: Zoomtoextent_1.default
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
