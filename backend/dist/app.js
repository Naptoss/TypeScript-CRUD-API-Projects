"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use('/api/tasks', taskRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
const mongoURL = 'mongodb+srv://Naptoss:ueadMcuOX812JMV9@cluster0.ftdiq33.mongodb.net/?retryWrites=true&w=majority';
mongoose_1.default.connect(mongoURL, {})
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error(`Error connecting to MongoDB: ${error}`));
