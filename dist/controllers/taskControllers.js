"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskController = exports.updateTaskController = exports.getTaskByIdController = exports.addTaskController = exports.getAllTasksController = exports.getTaskByWeatherController = void 0;
// Importa as funções do Models
const taskModels_1 = require("../models/taskModels");
const taskModels_2 = __importDefault(require("../models/taskModels"));
// Importa a função que pega o clima da cidade escolhida
const weatherUtils_1 = __importDefault(require("../utils/weatherUtils"));
// Necessário refatorar as funções posteriormente e fazer uma melhor filtragem
// dos dados que serão recebidos; Tratar os eventuais erros.
async function getTaskByWeatherController(req, res) {
    const current_weather = await (0, weatherUtils_1.default)("Maceió"); // Cidade utilizada de exemplo por causa do clima!
    const tasks = (0, taskModels_1.getTaskByWeather)(current_weather);
    if (tasks.length !== 0) {
        res.json({ weather: current_weather, tasks: tasks });
    }
    else {
        res.status(404).json({ weather: current_weather, message: 'There is no tasks for the actual weather' });
    }
}
exports.getTaskByWeatherController = getTaskByWeatherController;
function getAllTasksController(req, res) {
    const tasks = (0, taskModels_1.getAllTasks)();
    if (tasks.length !== 0) {
        res.json({ tasks: tasks });
    }
    else {
        res.status(404).json({ message: 'There is no tasks' });
    }
}
exports.getAllTasksController = getAllTasksController;
function addTaskController(req, res) {
    const { name, description, is_complete, weather } = req.body;
    const array_length = taskModels_2.default.length;
    const task = taskModels_2.default[array_length - 1];
    const task_id = (task) ? task.id + 1 : 1;
    if (!name || !description || !weather || is_complete === undefined) {
        res.status(400).json({ message: 'Task could not be added' });
    }
    else {
        const new_task = {
            id: task_id,
            name: name,
            description: description,
            is_complete: is_complete,
            weather: weather
        };
        const task = (0, taskModels_1.addTask)(new_task);
        if (task) {
            res.status(201).json({ task: task });
        }
        else {
            res.status(400).json({ message: 'Task could not be added' });
        }
    }
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
    const { name, description, is_complete, weather } = req.body;
    if (!name || !description || !weather || is_complete === undefined) {
        res.status(400).json({ message: 'Task could not be updated' });
    }
    else {
        const task = {
            id: task_id,
            name: name,
            description: description,
            is_complete: is_complete,
            weather: weather
        };
        const task_updated = (0, taskModels_1.updateTask)(task, task_id);
        if (task_updated) {
            res.json(task_updated);
        }
        else {
            res.status(404).json({ message: 'Task not found' });
        }
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
