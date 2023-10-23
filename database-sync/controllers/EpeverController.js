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
exports.EpeverController = void 0;
var datasources_1 = require("../database/datasources");
var models_1 = require("../models");
var services_1 = require("../services");
var utils_1 = require("../utils");
var EpeverController = /** @class */ (function () {
    function EpeverController() {
        var _this = this;
        this.firestoreService = new services_1.FirestoreService();
        this.clearFirestoreData = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this.firestoreService.clearLatestReadDocs()];
        }); }); };
    }
    EpeverController.prototype.getLocalData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var defaultOptionsMainData, mainData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("[EPEVER CONTROLLER] - Getting Local Data");
                        defaultOptionsMainData = {
                            select: {
                                id: true,
                            },
                            order: {
                                timestamp: 'DESC',
                            },
                        };
                        return [4 /*yield*/, datasources_1.MainDataSource.manager.find(models_1.Epever, defaultOptionsMainData)];
                    case 1:
                        mainData = _a.sent();
                        return [2 /*return*/, mainData];
                }
            });
        });
    };
    EpeverController.prototype.fetchFirestoreData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firestoreService.fetchDocs('epever')];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    EpeverController.prototype.fetchCSVData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fsService, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fsService = new services_1.FileSystemService();
                        return [4 /*yield*/, fsService.fetchEpeverDataFromCSV('test.csv')];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    EpeverController.prototype.syncData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var oldData, newData, dataToUpdate, index, element, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        return [4 /*yield*/, this.getLocalData()];
                    case 1:
                        oldData = _a.sent();
                        return [4 /*yield*/, this.fetchFirestoreData()];
                    case 2:
                        newData = _a.sent();
                        dataToUpdate = (0, utils_1.getDiffNewDataArray)(oldData, newData);
                        index = 0;
                        _a.label = 3;
                    case 3:
                        if (!(index < dataToUpdate.length)) return [3 /*break*/, 6];
                        element = dataToUpdate[index];
                        return [4 /*yield*/, datasources_1.MainDataSource.manager.save(models_1.Epever, element)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        index++;
                        return [3 /*break*/, 3];
                    case 6: return [4 /*yield*/, this.clearFirestoreData()];
                    case 7:
                        _a.sent();
                        console.log("\n=================================");
                        console.log("\nSynced Finished");
                        console.log("Synced " + dataToUpdate.length + " registers at " + new Date());
                        return [3 /*break*/, 9];
                    case 8:
                        e_1 = _a.sent();
                        console.log("Failed syncing registers at " + new Date());
                        console.log(e_1);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return EpeverController;
}());
exports.EpeverController = EpeverController;
