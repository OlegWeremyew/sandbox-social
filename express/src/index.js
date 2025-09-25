"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var dotenv_1 = require("dotenv");
var cors_1 = require("cors");
var chalk_1 = require("chalk");
var PORT = process.env.PORT || 5555;
// Загружаем нужный файл окружения
var envFile = process.env.NODE_ENV === "development" ? ".env.development" : ".env.production";
dotenv_1.default.config({ path: envFile });
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.get("/", function (req, res) {
    res.status(200);
    res.send({
        id: 221,
        name: 11,
    });
    return;
});
app.listen(PORT, function () {
    // console.log('process.env.NODE_ENV', process.env.NODE_ENV)
    // console.log('server start on port - %d', PORT)
    console.log(chalk_1.default.blueBright('🔧 Environment:'), chalk_1.default.bold.yellow(process.env.NODE_ENV || 'not set'));
    console.log(chalk_1.default.greenBright('🚀 Server started on'), chalk_1.default.bold.cyan("http://localhost:".concat(PORT)));
});
