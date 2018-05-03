System.register(["ol/control/defaults", "ol/interaction/defaults", "ol/layer/vector", "ol/source/vector", "ol/view"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var defaults_1, defaults_2, vector_1, vector_2, view_1, defaultControls, defaultInteractions, DefaultMapSettings;
    return {
        setters: [
            function (defaults_1_1) {
                defaults_1 = defaults_1_1;
            },
            function (defaults_2_1) {
                defaults_2 = defaults_2_1;
            },
            function (vector_1_1) {
                vector_1 = vector_1_1;
            },
            function (vector_2_1) {
                vector_2 = vector_2_1;
            },
            function (view_1_1) {
                view_1 = view_1_1;
            }
        ],
        execute: function () {
            defaultControls = defaults_1.default({
                attribution: false,
                rotate: false,
                zoom: false,
                attributionOptions: false
            });
            defaultInteractions = defaults_2.default({
                altShiftDragRotate: false,
                dragPan: false
            });
            DefaultMapSettings = /** @class */ (function () {
                function DefaultMapSettings() {
                    this.controls = defaultControls;
                    this.interactions = defaultInteractions;
                    this.view = new view_1.default({ center: [0, 0], zoom: 2 });
                    this.layers = [
                        new vector_1.default({ source: new vector_2.default() })
                    ];
                }
                return DefaultMapSettings;
            }());
            exports_1("DefaultMapSettings", DefaultMapSettings);
        }
    };
});
