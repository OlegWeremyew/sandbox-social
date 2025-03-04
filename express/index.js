"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
// Загружаем нужный файл окружения
const envFile = process.env.NODE_ENV === "development" ? ".env.development" : ".env.production";
dotenv_1.default.config({ path: envFile });
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.listen(() => {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    console.log('server start on port - %d', process.env.PORT);
});
