"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskController = exports.updateTaskController = exports.getTaskByIdController = exports.addTaskController = exports.getAllTasksController = exports.getTaskByWeatherController = void 0;
// Importa as funções do Models
const taskModels_1 = require("../models/taskModels");
// Importa a função que pega o clima da cidade escolhida
const weatherUtils_1 = __importDefault(require("../utils/weatherUtils"));
// Necessário refatorar as funções posteriormente e fazer uma melhor filtragem
// dos dados que serão recebidos; Tratar os eventuais erros.
async function getTaskByWeatherController(req, res) {
    const current_weather = await (0, weatherUtils_1.default)("Maceió");
    const tasks = (0, taskModels_1.getTaskByWeather)(current_weather);
    if (tasks) {
        res.json({ tasks: tasks, weather: current_weather });
    }
    else {
        res.status(404).json({ message: 'Por que essa bomba não atualiza' });
    }
}
exports.getTaskByWeatherController = getTaskByWeatherController;
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
