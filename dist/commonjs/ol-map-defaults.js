"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ol = require("openlayers");
var DefaultMapSettings = /** @class */ (function () {
    function DefaultMapSettings() {
        this.layers = [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ];
    }
    return DefaultMapSettings;
}());
exports.DefaultMapSettings = DefaultMapSettings;
