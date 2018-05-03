import DefaultControls from 'ol/control/defaults';
import DefaultInteractions from 'ol/interaction/defaults';
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import View from 'ol/view';

const defaultControls = DefaultControls({
    attribution: false,
    rotate: false,
    zoom: false,
    attributionOptions: false
} as olx.control.DefaultsOptions);

const defaultInteractions = DefaultInteractions({
    altShiftDragRotate: false,
    dragPan: false
} as olx.interaction.DefaultsOptions);

export class DefaultMapSettings implements olx.MapOptions {
    public controls = defaultControls;
    public interactions = defaultInteractions;
    public view = new View({ center: [0, 0], zoom: 2 });
    public layers = [
        new VectorLayer({ source: new VectorSource() })
    ];
}
