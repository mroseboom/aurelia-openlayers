import DragPan from 'ol/interaction/DragPan';
import DragRotate from 'ol/interaction/DragRotate';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom';
import Zoom from 'ol/control/zoom';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';

export class DefaultMapSettings implements ol.olx.MapOptions {
    public controls = [
        new Zoom()
    ];
    public interactions = [
        new DragPan({
            kinetic: false
        }),
        new DragRotate(),
        new MouseWheelZoom()
    ];
    public view = new View({
        center: [0, 0],
        zoom: 2
    });
    public layers = [
        new TileLayer({ source: new OSM() })
    ];
}
