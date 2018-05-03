var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autoinject, bindable } from 'aurelia-framework';
import Attribution from 'ol/control/attribution';
import FullScreen from 'ol/control/fullscreen';
import MousePosition from 'ol/control/mouseposition';
import OverviewMap from 'ol/control/overviewmap';
import Rotate from 'ol/control/rotate';
import ScaleLine from 'ol/control/scaleline';
import Zoom from 'ol/control/zoom';
import ZoomSlider from 'ol/control/zoomslider';
import ZoomToExtent from 'ol/control/zoomtoextent';
export var OlControlTypes = {
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
autoinject();
var OlControl = /** @class */ (function () {
    function OlControl(olMapService) {
        this.olMapService = olMapService;
    }
    OlControl.prototype.attached = function () {
        var _this = this;
        this.olMapService.getMap().then(function (_a) {
            var map = _a.map;
            var control = OlControlTypes[_this.control];
            if (control) {
                map.addControl(control);
            }
        });
    };
    __decorate([
        bindable()
    ], OlControl.prototype, "control", void 0);
    return OlControl;
}());
export { OlControl };
