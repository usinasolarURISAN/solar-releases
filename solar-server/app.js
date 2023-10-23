"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./routes");
var utils_1 = require("./utils");
var bootstrap_1 = __importDefault(require("./utils/config/bootstrap"));
(0, bootstrap_1.default)();
var app = (0, express_1.default)();
exports.app = app;
var swaggerDocument = (0, utils_1.GenerateSwaggerDocument)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*',
}));
app.use((0, routes_1.CustomRouter)({
    swagger: {
        enable: true,
        swaggerDoc: swaggerDocument,
    },
}));
