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
exports.CreateWeathers1634496537683 = void 0;
var typeorm_1 = require("typeorm");
var currentEnv = process.env.NODE_ENV || 'prd';
var weatherTableName = currentEnv + "-weather";
var CreateWeathers1634496537683 = /** @class */ (function () {
    function CreateWeathers1634496537683() {
    }
    CreateWeathers1634496537683.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                            name: weatherTableName,
                            columns: [
                                {
                                    name: 'id',
                                    type: 'uuid',
                                    isPrimary: true,
                                },
                                {
                                    name: 'weather_id',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                                {
                                    name: 'weather_main',
                                    type: 'varchar',
                                    isNullable: true,
                                },
                                {
                                    name: 'weather_description',
                                    type: 'varchar',
                                    isNullable: true,
                                },
                                {
                                    name: 'weather_icon',
                                    type: 'varchar',
                                    isNullable: true,
                                },
                                {
                                    name: 'main_temp',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                                {
                                    name: 'main_tempMin',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                                {
                                    name: 'main_tempMax',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                                {
                                    name: 'main_pressure',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                                {
                                    name: 'main_humidity',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                                {
                                    name: 'visibility',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                                {
                                    name: 'wind_speed',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                                {
                                    name: 'wind_deg',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                                {
                                    name: 'clouds_all',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                                {
                                    name: 'api_code',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                                {
                                    name: 'api_message',
                                    type: 'varchar',
                                    isNullable: true,
                                },
                                {
                                    name: 'timestamp',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                                {
                                    name: 'timestamp_minute',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                                {
                                    name: 'timestamp_hour',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                                {
                                    name: 'timestamp_date',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                                {
                                    name: 'timestamp_month',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                                {
                                    name: 'timestamp_year',
                                    type: 'numeric',
                                    isNullable: true,
                                },
                            ],
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateWeathers1634496537683.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.dropTable(weatherTableName)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CreateWeathers1634496537683;
}());
exports.CreateWeathers1634496537683 = CreateWeathers1634496537683;
