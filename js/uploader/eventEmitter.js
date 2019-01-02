export default class EventEmitter {
    constructor() {
        /**
         * @private
         * @type {Object<string,Array<Function>>}
         */
        this._events = {};
    }

    /**
     * @param {string} eventName
     * @param {eventHandler} callback
     */
    on(eventName, callback) {
        this._events[eventName] = this._events[eventName] || [];
        this._events[eventName].push(callback);
    }

    /**
     * @param {string} eventName
     * @param {object} data
     */
    emit(eventName, data) {
        if (this._events[eventName]) {
            this._events[eventName].forEach(callback => callback(data));
        }
    }
}

/**
 * @callback eventHandler
 * @param {object} data
 */
