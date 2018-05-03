define(["require", "exports", "./ol-configuration", "./services/ol-map-service", "./ol-map", "./ol-control", "./ol-map-defaults", "./ol-configuration"], function (require, exports, ol_configuration_1, ol_map_service_1, ol_map_1, ol_control_1, ol_map_defaults_1, ol_configuration_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    // Exports
    __export(ol_configuration_1);
    __export(ol_map_service_1);
    __export(ol_map_1);
    __export(ol_control_1);
    __export(ol_map_defaults_1);
    /**
     * Configures the plugin.
     */
    function configure(frameworkConfig, callback) {
        var applyConfig = null;
        // configure...
        var config = new ol_configuration_2.AureliaOpenlayersConfiguration(frameworkConfig, function (apply) { applyConfig = apply; });
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
