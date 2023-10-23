"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentVersion = exports.getCurrentEnvironment = exports.getEnvironmentVariable = void 0;
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
    return (0, exports.getEnvironmentVariable)('NODE_ENV') || 'dev';
};
exports.getCurrentEnvironment = getCurrentEnvironment;
var getCurrentVersion = function () {
    return (0, exports.getEnvironmentVariable)('VERSION') || '1.0.0';
};
exports.getCurrentVersion = getCurrentVersion;
