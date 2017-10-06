"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ol_configuration_1 = require("./ol-configuration");
exports.AureliaOpenlayersConfiguration = ol_configuration_1.AureliaOpenlayersConfiguration;
var ol_map_service_1 = require("./services/ol-map-service");
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
