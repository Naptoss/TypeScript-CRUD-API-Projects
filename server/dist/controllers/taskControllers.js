"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskController = void 0;
const taskModels_1 = __importDefault(require("../models/taskModels"));
exports.taskController = {
    async getAllTasks(req, res) {
        try {
            const tasks = await taskModels_1.default.find();
            res.json(tasks);
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao obter as tarefas.' });
        }
    },
    async createTask(req, res) {
        try {
            const { name, description, is_complete } = req.body;
            const newTask = new taskModels_1.default({
                name,
                description,
                is_complete,
            });
            const savedTask = await newTask.save();
            res.json(savedTask);
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao criar a tarefa.' });
        }
    },
    async getTaskById(req, res) {
        try {
            const taskId = req.params.id;
            const task = await taskModels_1.default.findById(taskId);
            if (!task) {
                return res.status(404).json({ error: 'Tarefa não encontrada.' });
            }
            res.json(task);
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao obter a tarefa.' });
        }
    },
    async updateTaskById(req, res) {
        try {
            const taskId = req.params.id;
            const { name, description, is_complete } = req.body;
            const updatedTask = await taskModels_1.default.findByIdAndUpdate(taskId, { name, description, is_complete }, { new: true });
            if (!updatedTask) {
                return res.status(404).json({ error: 'Tarefa não encontrada.' });
            }
            res.json(updatedTask);
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar a tarefa.' });
        }
    },
    async deleteTaskById(req, res) {
        try {
            const taskId = req.params.id;
            const deletedTask = await taskModels_1.default.findByIdAndDelete(taskId);
            if (!deletedTask) {
                return res.status(404).json({ error: 'Tarefa não encontrada.' });
            }
            res.json({ message: 'Tarefa excluída com sucesso.' });
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao excluir a tarefa.' });
        }
    },
};
exports.default = exports.taskController;
