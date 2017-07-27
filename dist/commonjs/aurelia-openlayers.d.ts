export * from './ol-map';
export * from './ol-configuration';
export * from './ol-map-defaults';
import { FrameworkConfiguration } from 'aurelia-framework';
import { AureliaOpenlayersConfiguration } from './ol-configuration';
/**
 * Configures the plugin.
 */
export declare function configure(frameworkConfig: FrameworkConfiguration, callback?: (config: AureliaOpenlayersConfiguration) => void): void;
