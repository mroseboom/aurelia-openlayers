"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tile_1 = require("ol/layer/tile");
var osm_1 = require("ol/source/osm");
var DefaultMapSettings = /** @class */ (function () {
    function DefaultMapSettings() {
        this.layers = [
            new tile_1.default({
                source: new osm_1.default()
            })
        ];
    }
    return DefaultMapSettings;
}());
exports.DefaultMapSettings = DefaultMapSettings;
