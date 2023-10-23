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
exports.Weather = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var utils_1 = require("../utils");
var currentTable = (0, utils_1.getCurrentEnvironment)() + "-weather";
var Weather = /** @class */ (function () {
    function Weather() {
        var timestamp = Number(new Date());
        var timestampObject = new Date(timestamp);
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
            this.timestamp = timestamp;
            this.timestamp_minute = timestampObject.getMinutes();
            this.timestamp_hour = timestampObject.getHours();
            this.timestamp_date = timestampObject.getDate();
            this.timestamp_month = timestampObject.getMonth() + 1;
            this.timestamp_year = timestampObject.getFullYear();
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], Weather.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "weather_id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Weather.prototype, "weather_main", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Weather.prototype, "weather_description", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Weather.prototype, "weather_icon", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "main_temp", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "main_tempMin", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "main_tempMax", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "main_pressure", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "main_humidity", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "visibility", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "wind_speed", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "wind_deg", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "clouds_all", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "api_code", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Weather.prototype, "api_message", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "timestamp", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "timestamp_minute", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "timestamp_hour", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "timestamp_date", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "timestamp_month", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Weather.prototype, "timestamp_year", void 0);
    Weather = __decorate([
        (0, typeorm_1.Entity)(currentTable),
        __metadata("design:paramtypes", [])
    ], Weather);
    return Weather;
}());
exports.Weather = Weather;
