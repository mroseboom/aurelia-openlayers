System.register([], function (exports_1, context_1) {
    "use strict";
    var maps, OlMapService, Deferred;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            // Keep track of the map instances
            maps = {};
            OlMapService = /** @class */ (function () {
                function OlMapService() {
                }
                /**
                 * Mark the map instance as resolved.
                 *
                 * @private
                 * @param {string} mapId
                 */
                OlMapService.prototype.setResolvedDefer = function (mapId) {
                    maps[mapId].resolvedDefer = true;
                };
                /**
                 * Retrieve the `unresolved` map instance
                 * and return the pending promise.
                 *
                 * @param {string} mapId
                 * @returns Promise
                 */
                OlMapService.prototype.getUnresolvedDefer = function (mapId) {
                    var defer;
                    if (maps[mapId] === undefined || maps[mapId].resolvedDefer === true) {
                        defer = new Deferred();
                        maps[mapId] = {
                            defer: defer,
                            resolvedDefer: false
                        };
                    }
                    else {
                        defer = maps[mapId].defer;
                    }
                    return defer;
                };
                /**
                 * Retrieves the `pending` promise for the map instance
                 *
                 * @param {string} mapId
                 * @returns Promise
                 */
                OlMapService.prototype.getDefer = function (mapId) {
                    var defer;
                    if (maps[mapId] === undefined || maps[mapId].resolvedDefer === false) {
                        defer = this.getUnresolvedDefer(mapId);
                    }
                    else {
                        defer = maps[mapId].defer;
                    }
                    return defer;
                };
                /**
                 * Register a new map instance
                 * When the map instance already exists
                 *
                 * @param {T} olMap
                 * @param {string} [mapId='main']
                 */
                OlMapService.prototype.registerMap = function (olMap, mapId) {
                    if (mapId === void 0) { mapId = 'main'; }
                    mapId = this.obtainEffectiveMapId(mapId);
                    var defer = this.getUnresolvedDefer(mapId);
                    defer.resolve(olMap);
                    this.setResolvedDefer(mapId);
                };
                /**
                 * Get a specific map instance
                 *
                 * @param {string} [mapId='main'] the id attribute of the openlayers map
                 *   If no mapId is given, default `main` will be used. (This is the main map)
                 *
                 * @returns {Promise<OlMap>} The view-model of OlMap.
                 */
                OlMapService.prototype.getMap = function (mapId) {
                    if (mapId === void 0) { mapId = 'main'; }
                    mapId = this.obtainEffectiveMapId(mapId);
                    var defer = this.getDefer(mapId);
                    return defer.promise;
                };
                /**
                 * Removed a resolved map instance from the collection
                 *
                 * @param {string} mapId
                 */
                OlMapService.prototype.removeMap = function (mapId) {
                    if (mapId === void 0) { mapId = 'main'; }
                    mapId = this.obtainEffectiveMapId(mapId);
                    if (typeof maps[mapId] !== 'undefined') {
                        delete maps[mapId];
                    }
                };
                OlMapService.prototype.isMainInstance = function (mapId) {
                    return mapId === null || mapId === this.obtainEffectiveMapId();
                };
                OlMapService.prototype.obtainEffectiveMapId = function (mapId) {
                    if (mapId === void 0) { mapId = 'main'; }
                    var id = mapId;
                    if (!mapId || mapId === null || mapId === undefined) {
                        id = 'main';
                    }
                    return id;
                };
                return OlMapService;
            }());
            exports_1("OlMapService", OlMapService);
            Deferred = /** @class */ (function () {
                function Deferred() {
                    var _this = this;
                    /**
                     * A method to resolve the associated Promise with the value passed.
                     * If the promise is already settled it does nothing.
                     *
                     * @param {anything} value : This value is used to resolve the promise
                     * If the value is a Promise then the associated promise assumes the state
                     * of Promise passed as value.
                     */
                    this.resolve = null;
                    /**
                     * A method to reject the associated Promise with the value passed.
                     * If the promise is already settled it does nothing.
                     *
                     * @param {anything} reason: The reason for the rejection of the Promise.
                     * Generally its an Error object. If however a Promise is passed, then the Promise
                     * itself will be the reason for rejection no matter the state of the Promise.
                     */
                    this.reject = null;
                    /**
                     * A newly created Pomise object.
                     * Initially in pending state.
                     */
                    this.promise = new Promise(function (resolve, reject) {
                        _this.resolve = resolve;
                        _this.reject = reject;
                    });
                }
                return Deferred;
            }());
        }
    };
});
