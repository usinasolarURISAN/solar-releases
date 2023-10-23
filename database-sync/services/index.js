"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemService = exports.FirestoreService = void 0;
var firestore_service_1 = require("./firestore.service");
Object.defineProperty(exports, "FirestoreService", { enumerable: true, get: function () { return __importDefault(firestore_service_1).default; } });
var fileSystem_service_1 = require("./fileSystem.service");
Object.defineProperty(exports, "FileSystemService", { enumerable: true, get: function () { return __importDefault(fileSystem_service_1).default; } });
