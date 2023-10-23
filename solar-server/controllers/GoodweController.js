"use strict";
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
exports.GoodweController = void 0;
var database_1 = require("../database");
var models_1 = require("../models");
var utils_1 = require("../utils");
var WeatherController_1 = require("./WeatherController");
var wc = new WeatherController_1.WeatherController();
var GoodweController = /** @class */ (function () {
    function GoodweController() {
    }
    GoodweController.prototype.getGenericData = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var body, dataKeys, deviceId, interval_1, all, appendedData, filteredGranularity, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        body = request.body;
                        if (!(0, utils_1.validateGetGenericDeviceDataRequestBody)(body, 'goodwe')) {
                            throw new utils_1.DefaultErrorPayload('VL000000');
                        }
                        dataKeys = body.dataKeys, deviceId = body.deviceId, interval_1 = body.interval;
                        return [4 /*yield*/, database_1.MainDataSource.manager.find(models_1.Goodwe, {
                                select: dataKeys,
                                where: {
                                    deviceId: deviceId,
                                },
                                take: utils_1.AVAILABLE_TIME_INTERVALS_METADATA[interval_1].totalRegistersReturn,
                                order: {
                                    timestamp: 'DESC',
                                },
                            })];
                    case 1:
                        all = _a.sent();
                        console.log("[GOODWE CONTROLLER] - Found " + all.length + " epever data for device " + deviceId);
                        return [4 /*yield*/, wc.appendWeatherData(all, interval_1)];
                    case 2:
                        appendedData = _a.sent();
                        filteredGranularity = appendedData.filter(function (_a) {
                            var timestamp = _a.timestamp;
                            return (0, utils_1.granularityChecker)(Number(timestamp), utils_1.AVAILABLE_TIME_INTERVALS_METADATA[interval_1].granularityMinutes);
                        });
                        console.log("[GOODWE CONTROLLER] - Filtered " + filteredGranularity.length + " epever data for device " + deviceId);
                        return [2 /*return*/, response.json(filteredGranularity.reverse())];
                    case 3:
                        error_1 = _a.sent();
                        response.status(500).send(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return GoodweController;
}());
exports.GoodweController = GoodweController;
