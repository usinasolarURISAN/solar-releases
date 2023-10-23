"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDeviceDataKeys = exports.validateDataKey = exports.validateDeviceIds = exports.validateDeviceId = exports.validateDevices = exports.validateDevice = void 0;
var consts_1 = require("../consts");
var string_1 = require("./string");
/**
 * Validates a given param if is a valid device name.
 * @param device
 * @returns
 */
var validateDevice = function (device) {
    if (!(0, string_1.isString)(device))
        return false;
    if (!(0, string_1.isOnlyNumbersAndLetters)(device))
        return false;
    for (var index = 0; index < consts_1.KNOWN_DEVICES.length; index++) {
        var element = consts_1.KNOWN_DEVICES[index];
        if (element === device)
            return true;
    }
    return false;
};
exports.validateDevice = validateDevice;
/**
 * Validates a given param of devices and return if they are all valid.
 * @param devices
 * @returns
 */
var validateDevices = function (devices) {
    for (var index = 0; index < devices.length; index++) {
        var element = devices[index];
        if (!(0, exports.validateDevice)(element))
            return false;
    }
    return true;
};
exports.validateDevices = validateDevices;
/**
 * Validates a given param if is a valid device id.
 * @param deviceId
 * @returns
 */
var validateDeviceId = function (deviceId) {
    if (!deviceId)
        return false;
    if (!(0, string_1.isString)(deviceId))
        return false;
    if (!(0, string_1.isOnlyNumbers)(deviceId))
        return false;
    if (deviceId.length > 15)
        return false;
    return true;
};
exports.validateDeviceId = validateDeviceId;
/**
 * Validates a given param of devicesId and return if they are all valid.
 * @param devices
 * @returns
 */
var validateDeviceIds = function (devices) {
    for (var index = 0; index < devices.length; index++) {
        var element = devices[index];
        if (!(0, exports.validateDeviceId)(element))
            return false;
    }
    return true;
};
exports.validateDeviceIds = validateDeviceIds;
/**
 * Validates if a given param is a valid data key from a given device.
 * @param dataKey
 * @returns
 */
var validateDataKey = function (dataKey, device) {
    if (!(0, string_1.isString)(dataKey))
        return false;
    if (!(0, string_1.isOnlyNumbersAndLetters)(dataKey))
        return false;
    for (var index = 0; index < consts_1.DATA_KEYS[device].length; index++) {
        var deviceDataKey = consts_1.DATA_KEYS[device][index];
        if (deviceDataKey === dataKey) {
            return true;
        }
    }
    return false;
};
exports.validateDataKey = validateDataKey;
/**
 * Validates if the given array param has all it's items as valid data key.
 * @param dataKeys
 * @returns
 */
var validateDeviceDataKeys = function (dataKeys, device) {
    if (!dataKeys)
        return false;
    for (var index = 0; index < dataKeys.length; index++) {
        var dataKey = dataKeys[index];
        if ((0, exports.validateDataKey)(dataKey, device) === false) {
            return false;
        }
    }
    return true;
};
exports.validateDeviceDataKeys = validateDeviceDataKeys;
