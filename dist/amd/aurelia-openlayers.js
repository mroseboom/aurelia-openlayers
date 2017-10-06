define(["require", "exports", "./ol-configuration", "./services/ol-map-service"], function (require, exports, ol_configuration_1, ol_map_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AureliaOpenlayersConfiguration = ol_configuration_1.AureliaOpenlayersConfiguration;
    exports.OlMapService = ol_map_service_1.OlMapService;
    /**
     * Configures the plugin.
     */
    function configure(frameworkConfig, callback) {
        var applyConfig = null;
        // configure...
        var config = new ol_configuration_1.AureliaOpenlayersConfiguration(frameworkConfig, function (apply) { applyConfig = apply; });
        if (callback instanceof Function) {
            callback(config);
        }
        else {
            config.useDefaults();
        }
        applyConfig();
    }
    exports.configure = configure;
});
