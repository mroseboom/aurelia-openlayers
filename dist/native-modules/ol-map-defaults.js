import * as ol from 'openlayers';
var DefaultMapSettings = (function () {
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
