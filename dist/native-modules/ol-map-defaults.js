import DragPan from 'ol/interaction/DragPan';
import DragRotate from 'ol/interaction/DragRotate';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom';
import Zoom from 'ol/control/zoom';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
var DefaultMapSettings = /** @class */ (function () {
    function DefaultMapSettings() {
        this.controls = [
            new Zoom()
        ];
        this.interactions = [
            new DragPan(),
            new DragRotate(),
            new MouseWheelZoom()
        ];
        this.view = new View({
            center: [0, 0],
            zoom: 2
        });
        this.layers = [
            new TileLayer({ source: new OSM() })
        ];
    }
    return DefaultMapSettings;
}());
export { DefaultMapSettings };
