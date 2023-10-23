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
var __1 = require("..");
var DefaultErrorPayload = /** @class */ (function (_super) {
    __extends(DefaultErrorPayload, _super);
    function DefaultErrorPayload(errorCode) {
        if (errorCode === void 0) { errorCode = 'UM000000'; }
        var _this = _super.call(this) || this;
        _this.message = __1.APP_ERRORS[errorCode].message;
        _this.code = errorCode;
        _this.status = __1.APP_ERRORS[errorCode].statusCode;
        return _this;
    }
    return DefaultErrorPayload;
}(Error));
exports.default = DefaultErrorPayload;
