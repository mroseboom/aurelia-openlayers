System.register(["openlayers"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ol, DefaultMapSettings;
    return {
        setters: [
            function (ol_1) {
                ol = ol_1;
            }
        ],
        execute: function () {
            DefaultMapSettings = /** @class */ (function () {
                function DefaultMapSettings() {
                    this.layers = [
                        new ol.layer.Tile({
                            source: new ol.source.OSM()
                        })
                    ];
                }
                return DefaultMapSettings;
            }());
            exports_1("DefaultMapSettings", DefaultMapSettings);
        }
    };
});
