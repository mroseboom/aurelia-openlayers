import Control from 'ol/control';
import Interaction from 'ol/interaction';
import VectorLayer from 'ol/layer/vector';
import View from 'ol/view';
export declare class DefaultMapSettings implements ol.olx.MapOptions {
    controls: import("openlayers").Collection<Control.Control>;
    interactions: import("openlayers").Collection<Interaction.Interaction>;
    view: View;
    layers: VectorLayer[];
}
