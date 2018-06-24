import DragPan from 'ol/interaction/DragPan';
import DragRotate from 'ol/interaction/DragRotate';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom';
import Zoom from 'ol/control/zoom';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
export declare class DefaultMapSettings implements ol.olx.MapOptions {
    controls: Zoom[];
    interactions: (DragPan | DragRotate | MouseWheelZoom)[];
    view: View;
    layers: TileLayer[];
}
