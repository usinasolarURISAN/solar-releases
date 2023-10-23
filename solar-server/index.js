"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./utils/config/environment");
var app_1 = require("./app");
app_1.app.listen(process.env.PORT, function () { return console.log('Server is running'); });
