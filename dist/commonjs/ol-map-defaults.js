"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var control_1 = require("ol/control");
var interaction_1 = require("ol/interaction");
var vector_1 = require("ol/layer/vector");
var vector_2 = require("ol/source/vector");
var view_1 = require("ol/view");
var defaultControls = control_1.default.defaults({
    attribution: false,
    rotate: false,
    zoom: false,
    attributionOptions: false
});
var defaultInteractions = interaction_1.default.defaults({
    altShiftDragRotate: false,
    dragPan: false
});
var DefaultMapSettings = /** @class */ (function () {
    function DefaultMapSettings() {
        this.controls = defaultControls;
        this.interactions = defaultInteractions;
        this.view = new view_1.default({ center: [0, 0], zoom: 2 });
        this.layers = [
            new vector_1.default({ source: new vector_2.default() })
        ];
    }
    return DefaultMapSettings;
}());
exports.DefaultMapSettings = DefaultMapSettings;
