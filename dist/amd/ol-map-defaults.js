define(["require", "exports", "ol/interaction/DragPan", "ol/interaction/DragRotate", "ol/interaction/MouseWheelZoom", "ol/control/zoom", "ol/layer/Tile", "ol/source/OSM", "ol/View"], function (require, exports, DragPan_1, DragRotate_1, MouseWheelZoom_1, zoom_1, Tile_1, OSM_1, View_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DefaultMapSettings = /** @class */ (function () {
        function DefaultMapSettings() {
            this.controls = [
                new zoom_1.default()
            ];
            this.interactions = [
                new DragPan_1.default({
                    kinetic: false
                }),
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
});
