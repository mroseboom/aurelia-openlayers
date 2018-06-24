import DragPan from 'ol/interaction/DragPan';
import DragRotate from 'ol/interaction/DragRotate';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom';
import Zoom from 'ol/control/zoom';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
var defaultControls = [
    new Zoom()
];
var defaultInteractions = [
    new DragPan({
        kinetic: false
    }),
    new DragRotate(),
    new MouseWheelZoom()
];
var DefaultMapSettings = /** @class */ (function () {
    function DefaultMapSettings() {
        this.controls = defaultControls;
        this.interactions = defaultInteractions;
        this.view = new View({ center: [0, 0], zoom: 2 });
        this.layers = [
            new TileLayer({ source: new OSM() })
        ];
    }
    return DefaultMapSettings;
}());
export { DefaultMapSettings };
