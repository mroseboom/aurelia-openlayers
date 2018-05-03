import { autoinject, bindable, customElement, noView } from 'aurelia-framework';
import Attribution from 'ol/control/attribution';
import Control from 'ol/control/control';
import FullScreen from 'ol/control/fullscreen';
import MousePosition from 'ol/control/mouseposition';
import OverviewMap from 'ol/control/overviewmap';
import Rotate from 'ol/control/rotate';
import ScaleLine from 'ol/control/scaleline';
import Zoom from 'ol/control/zoom';
import ZoomSlider from 'ol/control/zoomslider';
import ZoomToExtent from 'ol/control/zoomtoextent';
import { OlMap } from './ol-map';
import { OlMapService } from './services/ol-map-service';

export const OlControlTypes: { [key: string]: any } = {
    attribution: Attribution,
    fullscreen: FullScreen,
    mouseposition: MousePosition,
    overviewmap: OverviewMap,
    rotate: Rotate,
    scaleline: ScaleLine,
    zoom: Zoom,
    zoomslider: ZoomSlider,
    zoomtoextent: ZoomToExtent
};

@customElement('ol-control')
@noView()
autoinject()
export class OlControl {
    @bindable() public control: string;

    constructor(private olMapService: OlMapService) {}

    public attached(): void {
        this.olMapService.getMap().then(({ map }: OlMap) => {
            const control = OlControlTypes[this.control] as Control;

            if (control) {
                map.addControl(control);
            }
        });
    }
}
