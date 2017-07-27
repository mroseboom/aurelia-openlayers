"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Exports
__export(require("./ol-map"));
__export(require("./ol-configuration"));
__export(require("./ol-map-defaults"));
var ol_configuration_1 = require("./ol-configuration");
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
