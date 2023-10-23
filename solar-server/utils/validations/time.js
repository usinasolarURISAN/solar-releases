"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTimeBasedInterval = void 0;
var consts_1 = require("../consts");
var string_1 = require("./string");
/**
 * Validates a given param if is a valid interval.
 * @param interval
 * @returns
 */
var validateTimeBasedInterval = function (interval) {
    if (!interval)
        return false;
    if (!(0, string_1.isString)(interval))
        return false;
    if (!(0, string_1.isOnlyNumbersAndLetters)(interval))
        return false;
    for (var index = 0; index < consts_1.AVAILABLE_TIME_INTERVALS.length; index++) {
        var element = consts_1.AVAILABLE_TIME_INTERVALS[index];
        if (element === interval)
            return true;
    }
    return false;
};
exports.validateTimeBasedInterval = validateTimeBasedInterval;
