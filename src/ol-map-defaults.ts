import DragPan from 'ol/interaction/DragPan';
import DragRotate from 'ol/interaction/DragRotate';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom';
import Zoom from 'ol/control/zoom';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';

const defaultControls = [
    new Zoom()
];

const defaultInteractions = [
    new DragPan({
        kinetic: false
    }),
    new DragRotate(),
    new MouseWheelZoom()
];

export class DefaultMapSettings implements ol.olx.MapOptions {
    public controls = defaultControls;
    public interactions = defaultInteractions;
    public view = new View({ center: [0, 0], zoom: 2 });
    public layers = [
        new TileLayer({ source: new OSM() })
    ];
}
