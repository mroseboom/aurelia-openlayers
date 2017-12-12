import * as ol from 'openlayers';
var DefaultMapSettings = /** @class */ (function () {
    function DefaultMapSettings() {
        this.layers = [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ];
    }
    return DefaultMapSettings;
}());
export { DefaultMapSettings };
