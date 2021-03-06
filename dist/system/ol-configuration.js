System.register(["./ol-map-defaults", "aurelia-pal"], function (exports_1, context_1) {
    "use strict";
    var ol_map_defaults_1, aurelia_pal_1, resources, AureliaOpenlayersConfiguration;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ol_map_defaults_1_1) {
                ol_map_defaults_1 = ol_map_defaults_1_1;
            },
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            }
        ],
        execute: function () {
            resources = {
                'ol-map': aurelia_pal_1.PLATFORM.moduleName('./ol-map'),
                'ol-control': aurelia_pal_1.PLATFORM.moduleName('./ol-control')
            };
            /**
             * A configuration builder for the openlayers plugin.
             */
            AureliaOpenlayersConfiguration = /** @class */ (function () {
                function AureliaOpenlayersConfiguration(frameworkConfig, applySetter) {
                    var _this = this;
                    this.frameworkConfig = frameworkConfig;
                    this.resources = [];
                    this.settings = frameworkConfig.container.get(ol_map_defaults_1.DefaultMapSettings);
                    applySetter(function () { return _this.apply(); });
                }
                AureliaOpenlayersConfiguration.prototype.apply = function () {
                    var _this = this;
                    this.resources.forEach(function (resourceName) { return _this.frameworkConfig.globalResources(resources[resourceName]); });
                };
                /**
                 * Selects the Aurelia conventional defaults for the openlayers plugin.
                 * @return This instance.
                 */
                AureliaOpenlayersConfiguration.prototype.useDefaults = function () {
                    return this.useStandardResources();
                };
                /**
                 * Exports the standard set of openlayers behaviors to Aurelia's global resources.
                 * @return This instance.
                 */
                AureliaOpenlayersConfiguration.prototype.useStandardResources = function () {
                    return this.useResource('ol-map')
                        .useResource('ol-control');
                };
                /**
                 * Exports the chosen openlayers element or view to Aurelia's global resources.
                 * @param resourceName The name of the openlayers resource to export.
                 * @return This instance.
                 */
                AureliaOpenlayersConfiguration.prototype.useResource = function (resourceName) {
                    this.resources.push(resourceName);
                    return this;
                };
                return AureliaOpenlayersConfiguration;
            }());
            exports_1("AureliaOpenlayersConfiguration", AureliaOpenlayersConfiguration);
        }
    };
});
