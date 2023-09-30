"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskController = exports.updateTaskController = exports.getTaskByIdController = exports.addTaskController = exports.getAllTasksController = void 0;
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
function getTaskByIdController(req, res) {
    const { id } = req.params;
    const task_id = parseInt(id, 10);
    const task = (0, taskModels_1.getTaskById)(task_id);
    if (task) {
        res.json(task);
    }
    else {
        res.status(404).json({ message: 'Task not found' });
    }
}
exports.getTaskByIdController = getTaskByIdController;
function updateTaskController(req, res) {
    const { id } = req.params;
    const task_id = parseInt(id, 10);
    const task = req.body;
    const task_updated = (0, taskModels_1.updateTask)(task, task_id);
    if (task_updated) {
        res.json(task_updated);
    }
    else {
        res.status(404).json({ message: 'Task not found' });
    }
}
exports.updateTaskController = updateTaskController;
function deleteTaskController(req, res) {
    const { id } = req.params;
    const task_id = parseInt(id, 10);
    const task_deleted = (0, taskModels_1.deleteTask)(task_id);
    if (task_deleted) {
        res.json(taskModels_1.deleteTask);
    }
    else {
        res.status(404).json({ message: 'Task not found' });
    }
}
exports.deleteTaskController = deleteTaskController;
