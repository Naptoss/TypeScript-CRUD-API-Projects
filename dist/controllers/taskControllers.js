"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTaskController = exports.getAllTasksController = void 0;
// Importa as funções do Models
const taskModels_1 = require("../models/taskModels");
function getAllTasksController(req, res) {
    const tasks = (0, taskModels_1.getAllTasks)();
    res.json(tasks);
}
exports.getAllTasksController = getAllTasksController;
function addTaskController(req, res) {
    const new_task = req.body;
    const task = (0, taskModels_1.addTask)(new_task);
    res.status(201).json(task);
}
exports.addTaskController = addTaskController;
