import { FrameworkConfiguration } from 'aurelia-framework';
export declare type OpenlayersResourceName = 'ol-map' | 'ol-control';
/**
 * A configuration builder for the openlayers plugin.
 */
export declare class AureliaOpenlayersConfiguration {
    private frameworkConfig;
    private resources;
    /**
     * The global configuration settings.
     */
    settings: ol.olx.MapOptions;
    constructor(frameworkConfig: FrameworkConfiguration, applySetter: (apply: () => void) => void);
    apply(): void;
    /**
     * Selects the Aurelia conventional defaults for the openlayers plugin.
     * @return This instance.
     */
    useDefaults(): this;
    /**
     * Exports the standard set of openlayers behaviors to Aurelia's global resources.
     * @return This instance.
     */
    useStandardResources(): this;
    /**
     * Exports the chosen openlayers element or view to Aurelia's global resources.
     * @param resourceName The name of the openlayers resource to export.
     * @return This instance.
     */
    useResource(resourceName: OpenlayersResourceName): this;
}
