"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateSwaggerDocument = void 0;
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var helpers_1 = require("../helpers");
var GenerateSwaggerDocument = function () {
    var options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Solar API',
                version: (0, helpers_1.getCurrentVersion)(),
            },
        },
        apis: ['./src/routes*.ts'],
    };
    return (0, swagger_jsdoc_1.default)(options);
};
exports.GenerateSwaggerDocument = GenerateSwaggerDocument;
