"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var defaultErrorMessage = 'An unknown API error has occurred. Please try again later.';
var ResponseErrorHandler = /** @class */ (function (_super) {
    __extends(ResponseErrorHandler, _super);
    function ResponseErrorHandler(err) {
        var _a, _b, _c, _d;
        var _this = _super.call(this) || this;
        _this.message = ((_b = (_a = err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || defaultErrorMessage;
        _this.code = ((_d = (_c = err.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.cod) || '0';
        return _this;
    }
    return ResponseErrorHandler;
}(Error));
exports.default = ResponseErrorHandler;
