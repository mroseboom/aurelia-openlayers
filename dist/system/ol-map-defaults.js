System.register(["ol/interaction/DragPan", "ol/interaction/DragRotate", "ol/interaction/MouseWheelZoom", "ol/control/zoom", "ol/layer/Tile", "ol/source/OSM", "ol/View"], function (exports_1, context_1) {
    "use strict";
    var DragPan_1, DragRotate_1, MouseWheelZoom_1, zoom_1, Tile_1, OSM_1, View_1, defaultControls, defaultInteractions, DefaultMapSettings;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DragPan_1_1) {
                DragPan_1 = DragPan_1_1;
            },
            function (DragRotate_1_1) {
                DragRotate_1 = DragRotate_1_1;
            },
            function (MouseWheelZoom_1_1) {
                MouseWheelZoom_1 = MouseWheelZoom_1_1;
            },
            function (zoom_1_1) {
                zoom_1 = zoom_1_1;
            },
            function (Tile_1_1) {
                Tile_1 = Tile_1_1;
            },
            function (OSM_1_1) {
                OSM_1 = OSM_1_1;
            },
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            defaultControls = [
                new zoom_1.default()
            ];
            defaultInteractions = [
                new DragPan_1.default({
                    kinetic: false
                }),
                new DragRotate_1.default(),
                new MouseWheelZoom_1.default()
            ];
            DefaultMapSettings = /** @class */ (function () {
                function DefaultMapSettings() {
                    this.controls = defaultControls;
                    this.interactions = defaultInteractions;
                    this.view = new View_1.default({ center: [0, 0], zoom: 2 });
                    this.layers = [
                        new Tile_1.default({ source: new OSM_1.default() })
                    ];
                }
                return DefaultMapSettings;
            }());
            exports_1("DefaultMapSettings", DefaultMapSettings);
        }
    };
});
