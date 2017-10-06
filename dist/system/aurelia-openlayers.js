System.register(["./ol-configuration", "./services/ol-map-service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    exports_1("configure", configure);
    var ol_configuration_1, ol_map_service_1;
    return {
        setters: [
            function (ol_configuration_1_1) {
                ol_configuration_1 = ol_configuration_1_1;
            },
            function (ol_map_service_1_1) {
                ol_map_service_1 = ol_map_service_1_1;
            }
        ],
        execute: function () {
            exports_1("AureliaOpenlayersConfiguration", ol_configuration_1.AureliaOpenlayersConfiguration);
            exports_1("OlMapService", ol_map_service_1.OlMapService);
        }
    };
});
