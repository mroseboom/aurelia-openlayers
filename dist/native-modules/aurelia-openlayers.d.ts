import { FrameworkConfiguration } from 'aurelia-framework';
import { AureliaOpenlayersConfiguration } from './ol-configuration';
import { OlMapService } from './services/ol-map-service';
/**
 * Configures the plugin.
 */
export declare function configure(frameworkConfig: FrameworkConfiguration, callback?: (config: AureliaOpenlayersConfiguration) => void): void;
export { AureliaOpenlayersConfiguration, OlMapService };
