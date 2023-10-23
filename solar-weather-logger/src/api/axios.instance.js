"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var api = axios_1.default.create({
    baseURL: process.env.API_BASE_URL + "&appid=" + process.env.API_KEY,
});
exports.default = api;
