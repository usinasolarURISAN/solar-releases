"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arduino = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var utils_1 = require("../utils");
var table = (0, utils_1.getCurrentTable)();
var Arduino = /** @class */ (function () {
    function Arduino() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
            this.timestamp = Number(new Date());
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], Arduino.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], Arduino.prototype, "externalBatteryState", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], Arduino.prototype, "wireOvercharge", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Arduino.prototype, "currentVoltage", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Arduino.prototype, "energyGenerated", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Arduino.prototype, "timestamp", void 0);
    Arduino = __decorate([
        (0, typeorm_1.Entity)(table),
        __metadata("design:paramtypes", [])
    ], Arduino);
    return Arduino;
}());
exports.Arduino = Arduino;
