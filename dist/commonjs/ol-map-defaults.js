"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DragPan_1 = require("ol/interaction/DragPan");
var DragRotate_1 = require("ol/interaction/DragRotate");
var MouseWheelZoom_1 = require("ol/interaction/MouseWheelZoom");
var zoom_1 = require("ol/control/zoom");
var Tile_1 = require("ol/layer/Tile");
var OSM_1 = require("ol/source/OSM");
var View_1 = require("ol/View");
var DefaultMapSettings = /** @class */ (function () {
    function DefaultMapSettings() {
        this.controls = [
            new zoom_1.default()
        ];
        this.interactions = [
            new DragPan_1.default(),
            new DragRotate_1.default(),
            new MouseWheelZoom_1.default()
        ];
        this.view = new View_1.default({
            center: [0, 0],
            zoom: 2
        });
        this.layers = [
            new Tile_1.default({ source: new OSM_1.default() })
        ];
    }
    return DefaultMapSettings;
}());
exports.DefaultMapSettings = DefaultMapSettings;
