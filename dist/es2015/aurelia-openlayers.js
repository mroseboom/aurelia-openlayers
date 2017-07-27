// Exports
export * from './ol-map';
export * from './ol-configuration';
export * from './ol-map-defaults';
import { AureliaOpenlayersConfiguration } from './ol-configuration';
/**
 * Configures the plugin.
 */
export function configure(frameworkConfig, callback) {
    var applyConfig = null;
    // configure...
    var config = new AureliaOpenlayersConfiguration(frameworkConfig, function (apply) { applyConfig = apply; });
    if (callback instanceof Function) {
        callback(config);
    }
    else {
        config.useDefaults();
    }
    applyConfig();
}
