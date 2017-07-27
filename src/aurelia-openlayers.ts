// Exports
export * from './ol-map';
export * from './ol-configuration';
export * from './ol-map-defaults';

// Configuration
import { FrameworkConfiguration } from 'aurelia-framework';
import { AureliaOpenlayersConfiguration } from './ol-configuration';

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
