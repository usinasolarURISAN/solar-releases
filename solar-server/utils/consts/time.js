"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVAILABLE_TIME_INTERVALS_METADATA = exports.TOTAL_REGISTERS_PER_YEAR = exports.TOTAL_REGISTERS_PER_MONTH = exports.BASE_MONTH_DAYS_QUANTITY = exports.TOTAL_REGISTERS_PER_WEEK = exports.TOTAL_REGISTERS_PER_DAY = exports.TOTAL_REGISTERS_PER_HOUR = exports.DEFAULT_SAVING_TIME_INTERVAL_MIN = exports.AVAILABLE_TIME_INTERVALS = void 0;
exports.AVAILABLE_TIME_INTERVALS = [
    '1D',
    '1W',
    '1M',
    '1Y',
    'ALL',
];
exports.DEFAULT_SAVING_TIME_INTERVAL_MIN = 5;
exports.TOTAL_REGISTERS_PER_HOUR = 60 / exports.DEFAULT_SAVING_TIME_INTERVAL_MIN;
exports.TOTAL_REGISTERS_PER_DAY = exports.TOTAL_REGISTERS_PER_HOUR * 24;
exports.TOTAL_REGISTERS_PER_WEEK = exports.TOTAL_REGISTERS_PER_DAY * 7;
exports.BASE_MONTH_DAYS_QUANTITY = 30;
exports.TOTAL_REGISTERS_PER_MONTH = exports.BASE_MONTH_DAYS_QUANTITY * exports.TOTAL_REGISTERS_PER_DAY;
exports.TOTAL_REGISTERS_PER_YEAR = exports.TOTAL_REGISTERS_PER_MONTH * 12;
/**
 * This const will determine all metadata relationated to time intervals, but, for now,
 * we're only getting the number of registers per time interval. Futurely it could be
 * improved by adding more metadata like the interval time between the registers, for
 * example: 5min, 10min, 30min, 1h and so on...
 */
exports.AVAILABLE_TIME_INTERVALS_METADATA = {
    '1D': {
        granularityMinutes: '5',
        totalRegistersReturn: exports.TOTAL_REGISTERS_PER_DAY,
    },
    '1M': {
        granularityMinutes: '30',
        totalRegistersReturn: exports.TOTAL_REGISTERS_PER_MONTH,
    },
    '1W': {
        granularityMinutes: '10',
        totalRegistersReturn: exports.TOTAL_REGISTERS_PER_WEEK,
    },
    '1Y': {
        granularityMinutes: '60',
        totalRegistersReturn: exports.TOTAL_REGISTERS_PER_YEAR,
    },
    ALL: {
        granularityMinutes: '60',
        totalRegistersReturn: exports.TOTAL_REGISTERS_PER_YEAR,
    },
};
