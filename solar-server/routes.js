"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRouter = void 0;
var express_1 = require("express");
var controllers_1 = require("./controllers");
var SwaggerUi = __importStar(require("swagger-ui-express"));
var CustomRouter = function (options) {
    var router = (0, express_1.Router)();
    if (options.swagger.enable) {
        router.use('/swagger', SwaggerUi.serve);
        router.get('/swagger', SwaggerUi.setup(options.swagger.swaggerDoc));
    }
    var epeverController = new controllers_1.EpeverController();
    var goodweController = new controllers_1.GoodweController();
    // GET
    router.post('/data/epever/generic', epeverController.getGenericData);
    router.post('/data/goodwe/generic', goodweController.getGenericData);
    /**
     * @openapi
     * /:
     *   get:
     *     description: Welcome to swagger-jsdoc!
     *     responses:
     *       200:
     *         description: Returns a mysterious string.
     */
    router.get('/surveys', function () { return console.log('mysterious string'); });
    return router;
};
exports.CustomRouter = CustomRouter;
