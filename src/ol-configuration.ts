import { DefaultMapSettings } from './ol-map-defaults';
import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

const resources: { [key: string]: string } = {
    'ol-map': PLATFORM.moduleName('./ol-map'),
    'ol-control': PLATFORM.moduleName('./ol-control')
};

// tslint:disable-next-line:max-line-length
export type OpenlayersResourceName = 'ol-map' | 'ol-control';

/**
 * A configuration builder for the openlayers plugin.
 */
export class AureliaOpenlayersConfiguration {
    private resources: string[] = [];

    /**
     * The global configuration settings.
     */
    public settings: olx.MapOptions;

    constructor(private frameworkConfig: FrameworkConfiguration,
                applySetter: (apply: () => void) => void) {
        this.settings = frameworkConfig.container.get(DefaultMapSettings);
        applySetter(() => this.apply());
    }

    public apply(): void {
        this.resources.forEach(resourceName => this.frameworkConfig.globalResources(resources[resourceName]));
    }

    /**
     * Selects the Aurelia conventional defaults for the openlayers plugin.
     * @return This instance.
     */
    public useDefaults(): this {
        return this.useStandardResources();
    }

    /**
     * Exports the standard set of openlayers behaviors to Aurelia's global resources.
     * @return This instance.
     */
    public useStandardResources(): this {
        return this.useResource('ol-map')
                   .useResource('ol-control');
    }

    /**
     * Exports the chosen openlayers element or view to Aurelia's global resources.
     * @param resourceName The name of the openlayers resource to export.
     * @return This instance.
     */
    public useResource(resourceName: OpenlayersResourceName): this {
        this.resources.push(resourceName);
        return this;
    }
}
