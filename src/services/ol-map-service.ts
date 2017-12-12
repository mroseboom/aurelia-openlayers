import { OlMap } from '../ol-map';

// Keep track of the map instances
const maps: { [key: string]: any } = {};

export class OlMapService {
    /**
     * Mark the map instance as resolved.
     *
     * @private
     * @param {string} mapId
     */
    private setResolvedDefer(mapId: string): void {
        maps[mapId].resolvedDefer = true;
    }

    /**
     * Retrieve the `unresolved` map instance
     * and return the pending promise.
     *
     * @param {string} mapId
     * @returns Promise
     */
    private getUnresolvedDefer(mapId: string) {
        let defer;

        if (maps[mapId] === undefined || maps[mapId].resolvedDefer === true) {
            defer = new Deferred();

            maps[mapId] = {
                defer,
                resolvedDefer: false
            };
        } else {
            defer = maps[mapId].defer;
        }

        return defer;
    }

    /**
     * Retrieves the `pending` promise for the map instance
     *
     * @param {string} mapId
     * @returns Promise
     */
    private getDefer(mapId: string) {
        let defer;

        if (maps[mapId] === undefined || maps[mapId].resolvedDefer === false) {
            defer = this.getUnresolvedDefer(mapId);
        } else {
            defer = maps[mapId].defer;
        }
        return defer;
    }

    /**
     * Register a new map instance
     * When the map instance already exists
     *
     * @param {OlMap} OlMap
     * @param {string} [mapId='main']
     */
    public registerMap(olMap: OlMap, mapId: string = 'main'): void {
        mapId = this.obtainEffectiveMapId(mapId);

        const defer = this.getUnresolvedDefer(mapId);
        defer.resolve(olMap);
        this.setResolvedDefer(mapId);
    }

    /**
     * Get a specific map instance
     *
     * @param {string} [mapId='main'] the id attribute of the openlayers map
     *   If no mapId is given, default `main` will be used. (This is the main map)
     *
     * @returns {Promise<OlMap>} The view-model of OlMap.
     */
    public getMap(mapId: string = 'main'): Promise<OlMap> {
        mapId = this.obtainEffectiveMapId(mapId);

        const defer = this.getDefer(mapId);

        return defer.promise;
    }

    /**
     * Removed a resolved map instance from the collection
     *
     * @param {string} mapId
     */
    public removeMap(mapId: string): void {
        mapId = this.obtainEffectiveMapId(mapId);

        if (typeof maps[mapId] !== 'undefined') {
            delete maps[mapId];
        }
    }

    public isMainInstance(mapId: string): boolean {
        return mapId === null || mapId === this.obtainEffectiveMapId();
    }

    private obtainEffectiveMapId(mapId: string = 'main'): string {
        let id = mapId;

        if (!mapId || mapId === null || mapId === undefined) {
            id = 'main';
        }

        return id;
    }
}

class Deferred {
    private promise: Promise<{}>;

    /**
     * A method to resolve the associated Promise with the value passed.
     * If the promise is already settled it does nothing.
     *
     * @param {anything} value : This value is used to resolve the promise
     * If the value is a Promise then the associated promise assumes the state
     * of Promise passed as value.
     */
    private resolve: {} | PromiseLike<{}> | null = null;

    /**
     * A method to reject the associated Promise with the value passed.
     * If the promise is already settled it does nothing.
     *
     * @param {anything} reason: The reason for the rejection of the Promise.
     * Generally its an Error object. If however a Promise is passed, then the Promise
     * itself will be the reason for rejection no matter the state of the Promise.
     */
    private reject: {} | PromiseLike<{}> | null = null;

    constructor() {
        /**
         * A newly created Pomise object.
         * Initially in pending state.
         */
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
