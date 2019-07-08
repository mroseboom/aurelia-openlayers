import DragPan from 'ol/interaction/DragPan';
import DragRotate from 'ol/interaction/DragRotate';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom';
import Zoom from 'ol/control/zoom';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import { MapOptions } from 'ol/PluggableMap';
export declare class DefaultMapSettings implements MapOptions {
    controls: Zoom[];
    interactions: (DragPan | DragRotate | MouseWheelZoom)[];
    view: View;
    layers: TileLayer[];
}
