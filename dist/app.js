"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.use('/api/tasks', taskRoutes_1.default);
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
