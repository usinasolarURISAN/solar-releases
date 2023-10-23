"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.granularityChecker = void 0;
/**
 * Use to check if a register timestamp is allowed in the given granularity.
 */
var granularityChecker = function (timestamp, granularityFactorMinute) {
    var castedGranularityFactorMinute = Number(granularityFactorMinute);
    var currentMinute = new Date(timestamp).getMinutes();
    return currentMinute % castedGranularityFactorMinute === 0;
};
exports.granularityChecker = granularityChecker;
