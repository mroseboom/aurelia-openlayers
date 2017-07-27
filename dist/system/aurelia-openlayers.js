System.register(["./ol-map", "./ol-configuration", "./ol-map-defaults"], function (exports_1, context_1) {
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
    var ol_configuration_1;
    var exportedNames_1 = {
        "configure": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (ol_map_1_1) {
                exportStar_1(ol_map_1_1);
            },
            function (ol_configuration_2_1) {
                exportStar_1(ol_configuration_2_1);
                ol_configuration_1 = ol_configuration_2_1;
            },
            function (ol_map_defaults_1_1) {
                exportStar_1(ol_map_defaults_1_1);
            }
        ],
        execute: function () {
        }
    };
});
