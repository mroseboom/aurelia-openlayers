import TileLayer from 'ol/layer/tile';
import OSM from 'ol/source/osm';
var DefaultMapSettings = /** @class */ (function () {
    function DefaultMapSettings() {
        this.layers = [
            new TileLayer({
                source: new OSM()
            })
        ];
    }
    return DefaultMapSettings;
}());
export { DefaultMapSettings };
