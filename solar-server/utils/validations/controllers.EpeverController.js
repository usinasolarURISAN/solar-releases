"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGetGenericDeviceDataRequestBody = void 0;
var devices_1 = require("./devices");
var time_1 = require("./time");
var validateGetGenericDeviceDataRequestBody = function (body, device) {
    if (!body)
        return false;
    if (!(0, devices_1.validateDeviceId)(body.deviceId))
        return false;
    if (!(0, devices_1.validateDeviceDataKeys)(body.dataKeys, device))
        return false;
    if (!(0, time_1.validateTimeBasedInterval)(body.interval))
        return false;
    return true;
};
exports.validateGetGenericDeviceDataRequestBody = validateGetGenericDeviceDataRequestBody;
