import DefaultControls from 'ol/control/defaults';
import DefaultInteractions from 'ol/interaction/defaults';
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import View from 'ol/view';
var defaultControls = DefaultControls({
    attribution: false,
    rotate: false,
    zoom: false,
    attributionOptions: false
});
var defaultInteractions = DefaultInteractions({
    altShiftDragRotate: false,
    dragPan: false
});
var DefaultMapSettings = /** @class */ (function () {
    function DefaultMapSettings() {
        this.controls = defaultControls;
        this.interactions = defaultInteractions;
        this.view = new View({ center: [0, 0], zoom: 2 });
        this.layers = [
            new VectorLayer({ source: new VectorSource() })
        ];
    }
    return DefaultMapSettings;
}());
export { DefaultMapSettings };
