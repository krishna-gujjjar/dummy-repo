import {showError} from '.';

/**
 * Get JSON Object form String
 * @param {string} data - A JSON String
 * @param {boolean} [isReturning=false] - If `data` is not valid JSON Object, Then Return `data` string
 *
 * @returns {(object|string|null)} Valid `JSON Object` or `null`.
 * - If `isReturning` = `true` & `data` not a valid `JSON Object` then return `string`
 */
export function getJson(data = '', isReturning = false) {
    try {
        data = JSON.parse(data);
    } catch (error) {
        showError(error);
        if (!isReturning) data = null;
    }
    return data;
}

export function isEmpty(data) {
    if (typeof data === 'object' && data !== null) return Object.keys(data).length === 0;
    else
        switch (data) {
            case '':
            case 0:
            case '0':
            case null:
            case false:
            case typeof data == 'undefined':
                return true;
            default:
                return false;
        }
}
