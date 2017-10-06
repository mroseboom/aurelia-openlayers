import { AureliaOpenlayersConfiguration } from './ol-configuration';
import { OlMapService } from './services/ol-map-service';
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
// Exports
export { AureliaOpenlayersConfiguration, OlMapService };
