System.register(["openlayers"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ol, OlMapCustomElement;
    return {
        setters: [
            function (ol_1) {
                ol = ol_1;
            }
        ],
        execute: function () {
            OlMapCustomElement = (function () {
                function OlMapCustomElement(mapSettings) {
                    this.mapSettings = mapSettings;
                }
                OlMapCustomElement.prototype.attached = function () {
                    this.map = new ol.Map({
                        layers: this.mapSettings.layers,
                        target: this.mapReference,
                        view: new ol.View({
                            center: [0, 0],
                            zoom: 2
                        })
                    });
                };
                return OlMapCustomElement;
            }());
            exports_1("OlMapCustomElement", OlMapCustomElement);
        }
    };
});
