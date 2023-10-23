"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./utils/config/environment");
var cron_1 = require("cron");
var app_1 = __importDefault(require("./app"));
console.log('Starting server...\n\n');
var job = new cron_1.CronJob('*/5 * * * *', function () {
    (0, app_1.default)();
    console.log('Starting cron');
});
job.start();
