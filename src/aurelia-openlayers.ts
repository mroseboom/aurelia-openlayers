// Configuration
import { FrameworkConfiguration } from 'aurelia-framework';
import { AureliaOpenlayersConfiguration } from './ol-configuration';
import { OlMapService } from './services/ol-map-service';

/**
 * Configures the plugin.
 */
export function configure(
    frameworkConfig: FrameworkConfiguration,
    callback?: (config: AureliaOpenlayersConfiguration) => void): void {
    let applyConfig: () => void = null as any;

    // configure...
    const config = new AureliaOpenlayersConfiguration(frameworkConfig, (apply: () => void) => { applyConfig = apply; });
    if (callback instanceof Function) {
        callback(config);
    } else {
        config.useDefaults();
    }

    applyConfig();
}

// Exports
export { AureliaOpenlayersConfiguration, OlMapService };
