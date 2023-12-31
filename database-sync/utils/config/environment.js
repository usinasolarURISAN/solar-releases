"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var currentEnv = process.env.NODE_ENV || 'dev';
dotenv_1.default.config({
    path: "src/utils/env/.env." + currentEnv,
});
