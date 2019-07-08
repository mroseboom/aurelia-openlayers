import DragPan from 'ol/interaction/DragPan';
import DragRotate from 'ol/interaction/DragRotate';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom';
import Zoom from 'ol/control/zoom';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import { MapOptions } from 'ol/PluggableMap';

export class DefaultMapSettings implements MapOptions {
    public controls = [
        new Zoom()
    ];

    public interactions = [
        new DragPan(),
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
