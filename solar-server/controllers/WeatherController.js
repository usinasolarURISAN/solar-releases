"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherController = void 0;
var database_1 = require("../database");
var models_1 = require("../models");
var utils_1 = require("../utils");
var WeatherController = /** @class */ (function () {
    function WeatherController() {
    }
    WeatherController.prototype.fetchWeatherData = function (interval) {
        return __awaiter(this, void 0, void 0, function () {
            var thresholdData, defaultOptions, all, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thresholdData = 2;
                        defaultOptions = {
                            select: {
                                weather_icon: true,
                                timestamp_date: true,
                                timestamp_hour: true,
                                timestamp_minute: true,
                                timestamp_month: true,
                                timestamp_year: true,
                            },
                            take: utils_1.AVAILABLE_TIME_INTERVALS_METADATA[interval].totalRegistersReturn +
                                thresholdData,
                            order: {
                                timestamp: 'DESC',
                            },
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, database_1.WeatherDataSource.manager.find(models_1.Weather, defaultOptions)];
                    case 2:
                        all = _a.sent();
                        console.log("[WEATHER CONTROLLER] - Fetched " + all.length + " weather data");
                        return [2 /*return*/, all];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WeatherController.prototype.appendWeatherData = function (deviceData, interval) {
        return __awaiter(this, void 0, void 0, function () {
            var appendData, weatherData, index, deviceElement, device_timestamp_date, device_timestamp_hour, device_timestamp_minute, device_timestamp_month, device_timestamp_year, index0, weatherElement, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        appendData = [];
                        return [4 /*yield*/, this.fetchWeatherData(interval)];
                    case 1:
                        weatherData = _a.sent();
                        for (index = 0; index < deviceData.length; index++) {
                            deviceElement = deviceData[index];
                            device_timestamp_date = new Date(Number(deviceElement.timestamp)).getDate();
                            device_timestamp_hour = new Date(Number(deviceElement.timestamp)).getHours();
                            device_timestamp_minute = new Date(Number(deviceElement.timestamp)).getMinutes();
                            device_timestamp_month = new Date(Number(deviceElement.timestamp)).getMonth() + 1;
                            device_timestamp_year = new Date(Number(deviceElement.timestamp)).getFullYear();
                            for (index0 = 0; index0 < weatherData.length; index0++) {
                                weatherElement = weatherData[index0];
                                if (String(device_timestamp_date) ===
                                    String(weatherElement.timestamp_date) &&
                                    String(device_timestamp_hour) ===
                                        String(weatherElement.timestamp_hour) &&
                                    String(device_timestamp_minute) ===
                                        String(weatherElement.timestamp_minute) &&
                                    String(device_timestamp_month) ===
                                        String(weatherElement.timestamp_month) &&
                                    String(device_timestamp_year) ===
                                        String(weatherElement.timestamp_year)) {
                                    appendData.push(__assign({ weather: weatherElement.weather_icon || '02dw' }, deviceElement));
                                    break;
                                }
                            }
                        }
                        console.log("[WEATHER CONTROLLER] - Appended " + appendData.length + " weather data");
                        return [2 /*return*/, appendData];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return WeatherController;
}());
exports.WeatherController = WeatherController;
