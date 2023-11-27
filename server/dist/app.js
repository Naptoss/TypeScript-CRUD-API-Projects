"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
dotenv_1.default.config();
app.use(body_parser_1.default.json());
app.use('/api/tasks', taskRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/todo-app';
mongoose_1.default.connect(mongoURL, {})
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error(`Error connecting to MongoDB: ${error}`));
