export declare class OlMapService {
    /**
     * Mark the map instance as resolved.
     *
     * @private
     * @param {string} mapId
     */
    private setResolvedDefer(mapId);
    /**
     * Retrieve the `unresolved` map instance
     * and return the pending promise.
     *
     * @param {string} mapId
     * @returns Promise
     */
    private getUnresolvedDefer(mapId);
    /**
     * Retrieves the `pending` promise for the map instance
     *
     * @param {string} mapId
     * @returns Promise
     */
    private getDefer(mapId);
    /**
     * Register a new map instance
     * When the map instance already exists
     *
     * @param {T} olMap
     * @param {string} [mapId='main']
     */
    registerMap<T>(olMap: T, mapId?: string): void;
    /**
     * Get a specific map instance
     *
     * @param {string} [mapId='main'] the id attribute of the openlayers map
     *   If no mapId is given, default `main` will be used. (This is the main map)
     *
     * @returns {Promise<OlMap>} The view-model of OlMap.
     */
    getMap<T>(mapId?: string): Promise<T>;
    /**
     * Removed a resolved map instance from the collection
     *
     * @param {string} mapId
     */
    removeMap(mapId: string): void;
    isMainInstance(mapId: string): boolean;
    private obtainEffectiveMapId(mapId?);
}
