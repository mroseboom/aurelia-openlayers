import Control from 'ol/control';
import Interaction from 'ol/interaction';
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import View from 'ol/view';

const defaultControls = Control.defaults({
    attribution: false,
    rotate: false,
    zoom: false,
    attributionOptions: false
} as ol.olx.control.DefaultsOptions);

const defaultInteractions = Interaction.defaults({
    altShiftDragRotate: false,
    dragPan: false
} as ol.olx.interaction.DefaultsOptions);

export class DefaultMapSettings implements ol.olx.MapOptions {
    public controls = defaultControls;
    public interactions = defaultInteractions;
    public view = new View({ center: [0, 0], zoom: 2 });
    public layers = [
        new VectorLayer({ source: new VectorSource() })
    ];
}
