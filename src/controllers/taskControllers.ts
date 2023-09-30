// Importa as funções do Models
import { 
    Task, 
    getAllTasks, 
    addTask, 
    getTaskById, 
    updateTask, 
    deleteTask, 
} from '../models/taskModels';

// Importa o Request e Response para podermos manipular a Api
import { Request, Response } from 'express';

export function getAllTasksController(req: Request, res: Response): void {
    const tasks = getAllTasks();
    res.json(tasks);
}

export function addTaskController(req: Request, res: Response): void {
    const new_task = req.body;
    const task = addTask(new_task);
    res.status(201).json(task);
}