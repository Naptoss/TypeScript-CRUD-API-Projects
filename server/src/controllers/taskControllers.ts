import { Request, Response } from 'express';
import TaskModel from '../models/taskModels';
import { Task } from '../models/taskModels'; 

export const taskController = {

async getAllTasks(req: Request, res: Response) {
    try {
    const tasks: Task[] = await TaskModel.find();
    res.json(tasks);
    } catch (error) {
    res.status(500).json({ error: 'Erro ao obter as tarefas.' });
    }
},

async createTask(req: Request, res: Response) {
    try {
    const { name, description, is_complete } = req.body;

    const newTask: Task = new TaskModel({
        name,
        description,
        is_complete,
    });

    const savedTask = await newTask.save();
    res.json(savedTask);
    } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a tarefa.' });
    }
},

async getTaskById(req: Request, res: Response) {
    try {
    const taskId = req.params.id;
    const task: Task | null = await TaskModel.findById(taskId);

    if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    res.json(task);
    } catch (error) {
    res.status(500).json({ error: 'Erro ao obter a tarefa.' });
    }
},

async updateTaskById(req: Request, res: Response) {
    try {
    const taskId = req.params.id;
    const { name, description, is_complete } = req.body;

    const updatedTask: Task | null = await TaskModel.findByIdAndUpdate(
        taskId,
        { name, description, is_complete },
        { new: true }
    );

    if (!updatedTask) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    res.json(updatedTask);
    } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a tarefa.' });
    }
},

async deleteTaskById(req: Request, res: Response) {
    try {
    const taskId = req.params.id;
    const deletedTask: Task | null = await TaskModel.findByIdAndDelete(taskId);

    if (!deletedTask) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    res.json({ message: 'Tarefa excluída com sucesso.' });
    } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir a tarefa.' });
    }
},
};

export default taskController;