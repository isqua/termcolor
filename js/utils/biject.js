export default class Biject {
    constructor(map) {
        this._from = new Map();
        this._to = new Map();

        for (let [ key, value ] of Object.entries(map)) {
            this._from.set(key, value);
            this._to.set(value, key);
        }
    }

    ktov(key) {
        return this._from.get(key);
    }

    vtok(val) {
        return this._to.get(val);
    }
}
