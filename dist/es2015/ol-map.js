import * as ol from 'openlayers';
var OlMapCustomElement = (function () {
    function OlMapCustomElement(mapSettings) {
        this.mapSettings = mapSettings;
    }
    OlMapCustomElement.prototype.attached = function () {
        this.map = new ol.Map({
            layers: this.mapSettings.layers,
            target: this.mapReference,
            view: new ol.View({
                center: [0, 0],
                zoom: 2
            })
        });
    };
    return OlMapCustomElement;
}());
export { OlMapCustomElement };
