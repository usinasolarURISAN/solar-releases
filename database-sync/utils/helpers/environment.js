"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentTable = exports.getCurrentDeviceID = exports.getCurrentDevice = exports.getCurrentEnvironment = exports.getEnvironmentVariable = void 0;
/**
 * You can pass a generic type to define the return type which can be `Environments` or `Devices`
 * @param variable its one of `EnvironmentVariables` type
 * @returns generic type
 */
var getEnvironmentVariable = function (variable) {
    return process.env[variable];
};
exports.getEnvironmentVariable = getEnvironmentVariable;
/**
 * Get current environment. Basically calls `getEnvironmentVariable` under de hood.
 * @returns current environment
 */
var getCurrentEnvironment = function () {
    return (0, exports.getEnvironmentVariable)('ENV');
};
exports.getCurrentEnvironment = getCurrentEnvironment;
/**
 * Get current device. Basically calls `getEnvironmentVariable` under de hood.
 * @returns current device
 */
var getCurrentDevice = function () { return (0, exports.getEnvironmentVariable)('DEVICE'); };
exports.getCurrentDevice = getCurrentDevice;
/**
 * Get current device. Basically calls `getEnvironmentVariable` under de hood.
 * @returns current device ID
 */
var getCurrentDeviceID = function () {
    return (0, exports.getEnvironmentVariable)('DEVICE_ID');
};
exports.getCurrentDeviceID = getCurrentDeviceID;
/**
 * Useful to determine which table will be used when using cli
 * @returns UsedTables
 */
var getCurrentTable = function () {
    var env = process.env.NODE_ENV;
    var device = process.env.NODE_ENV;
    return env + "-" + device;
};
exports.getCurrentTable = getCurrentTable;
