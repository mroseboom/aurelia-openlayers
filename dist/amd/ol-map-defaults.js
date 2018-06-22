define(["require", "exports", "ol/control", "ol/interaction", "ol/layer/vector", "ol/source/vector", "ol/view"], function (require, exports, control_1, interaction_1, vector_1, vector_2, view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var defaultControls = control_1.default.defaults({
        attribution: false,
        rotate: false,
        zoom: false,
        attributionOptions: false
    });
    var defaultInteractions = interaction_1.default.defaults({
        altShiftDragRotate: false,
        dragPan: false
    });
    var DefaultMapSettings = /** @class */ (function () {
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
    exports.DefaultMapSettings = DefaultMapSettings;
});
