System.register(["ol/layer/tile", "ol/source/osm"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tile_1, osm_1, DefaultMapSettings;
    return {
        setters: [
            function (tile_1_1) {
                tile_1 = tile_1_1;
            },
            function (osm_1_1) {
                osm_1 = osm_1_1;
            }
        ],
        execute: function () {
            DefaultMapSettings = /** @class */ (function () {
                function DefaultMapSettings() {
                    this.layers = [
                        new tile_1.default({
                            source: new osm_1.default()
                        })
                    ];
                }
                return DefaultMapSettings;
            }());
            exports_1("DefaultMapSettings", DefaultMapSettings);
        }
    };
});
