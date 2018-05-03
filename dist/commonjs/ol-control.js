"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var attribution_1 = require("ol/control/attribution");
var fullscreen_1 = require("ol/control/fullscreen");
var mouseposition_1 = require("ol/control/mouseposition");
var overviewmap_1 = require("ol/control/overviewmap");
var rotate_1 = require("ol/control/rotate");
var scaleline_1 = require("ol/control/scaleline");
var zoom_1 = require("ol/control/zoom");
var zoomslider_1 = require("ol/control/zoomslider");
var zoomtoextent_1 = require("ol/control/zoomtoextent");
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
