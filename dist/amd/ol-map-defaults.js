define(["require", "exports", "ol/layer/tile", "ol/source/osm"], function (require, exports, tile_1, osm_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
