System.register(["ol/control", "ol/interaction", "ol/layer/vector", "ol/source/vector", "ol/view"], function (exports_1, context_1) {
    "use strict";
    var control_1, interaction_1, vector_1, vector_2, view_1, defaultControls, defaultInteractions, DefaultMapSettings;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (control_1_1) {
                control_1 = control_1_1;
            },
            function (interaction_1_1) {
                interaction_1 = interaction_1_1;
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
            defaultControls = control_1.default.defaults({
                attribution: false,
                rotate: false,
                zoom: false,
                attributionOptions: false
            });
            defaultInteractions = interaction_1.default.defaults({
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
