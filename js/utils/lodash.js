/**
 * @param {Object} obj
 * @param {String} prop
 * @returns {Boolean}
 */
export const has = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
