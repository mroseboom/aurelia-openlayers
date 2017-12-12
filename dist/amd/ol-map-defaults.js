define(["require", "exports", "openlayers"], function (require, exports, ol) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
