"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestampToLocalHour = exports.timestampToLocalDate = void 0;
var handleSingleNumberFormat = function (number) {
    return number <= 9 ? "0" + number : String(number);
};
var handleTimestampLengthConversion = function (timestamp) {
    return String(timestamp).length === 10 ? timestamp + "000" : timestamp;
};
var sanitizeTimestamp = function (timestamp) {
    return Number(handleTimestampLengthConversion(timestamp));
};
var timestampToLocalDate = function (timestamp) {
    var timestampDate = new Date(sanitizeTimestamp(timestamp));
    var day = timestampDate.getDate();
    var month = handleSingleNumberFormat(timestampDate.getMonth() + 1);
    var year = timestampDate.getFullYear();
    return day + "/" + month + "/" + year;
};
exports.timestampToLocalDate = timestampToLocalDate;
var timestampToLocalHour = function (timestamp) {
    var timestampDate = new Date(sanitizeTimestamp(timestamp));
    var hour = handleSingleNumberFormat(timestampDate.getHours());
    var minute = handleSingleNumberFormat(timestampDate.getMinutes());
    return hour + ":" + minute;
};
exports.timestampToLocalHour = timestampToLocalHour;
