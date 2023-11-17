"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    is_complete: { type: Boolean, required: true },
    weather: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('Task', TaskSchema);
