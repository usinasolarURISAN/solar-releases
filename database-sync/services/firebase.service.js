"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var app_1 = require("firebase/app");
var utils_1 = require("../utils");
exports.app = (0, app_1.initializeApp)(utils_1.FIREBASE_CONFIG);
