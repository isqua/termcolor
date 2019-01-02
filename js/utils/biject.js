/**
 * @implements {CS.BijectInterface}
 */
export default class Biject {
    /**
     * @param {CS.BijectMap} map
     */
    constructor(map) {
        /**
         * @private
         * @type {Map<String,String>}
         */
        this._from = new Map();
        /**
         * @private
         * @type {Map<String,String>}
         */
        this._to = new Map();

        for (let [ key, value ] of Object.entries(map)) {
            this._from.set(key, value);
            this._to.set(value, key);
        }
    }


    /**
     * Key to value
     * @param {string} key
     * @returns {string} value
     */
    ktov(key) {
        return this._from.get(key);
    }

    /**
     * Value to key
     * @param {string} val
     * @returns {string} key
     */
    vtok(val) {
        return this._to.get(val);
    }
}
