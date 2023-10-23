"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherDataSource = exports.MainDataSource = void 0;
var typeorm_1 = require("typeorm");
var models_1 = require("../models");
exports.MainDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'solar_reader',
    password: '87g2387geg7qr38a7h276rg9763rg',
    database: 'solar',
    entities: [models_1.Epever, models_1.Goodwe],
    logging: true,
});
exports.WeatherDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'weather_reader',
    password: 'zsa87rg30a387uygdf9a763gadusyflkjnrj2np3r3fqff98nag4',
    database: 'solar',
    entities: [models_1.Weather],
    logging: true,
});
