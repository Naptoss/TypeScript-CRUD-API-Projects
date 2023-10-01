// Importa as funções do Models
import { 
    Task, 
    getAllTasks, 
    addTask, 
    getTaskById, 
    updateTask, 
    deleteTask, 
    getTaskByWeather, 
    WeatherChoices 
} from '../models/taskModels';

import tasks from '../models/taskModels';

// Importa o Request e Response para podermos manipular a Api
import { Request, Response } from 'express';

// Importa a função que pega o clima da cidade escolhida
import getWeatherData from '../utils/weatherUtils'

// Necessário refatorar as funções posteriormente e fazer uma melhor filtragem
// dos dados que serão recebidos; Tratar os eventuais erros.

export async function getTaskByWeatherController(req: Request, res: Response): Promise<void> {
    const current_weather: WeatherChoices = await getWeatherData("Maceió"); // Cidade utilizada de exemplo por causa do clima!
    const tasks = getTaskByWeather(current_weather);

    if (tasks.length !== 0){
        res.json({weather: current_weather, tasks: tasks}); 
    } else {
        res.status(404).json({weather: current_weather, message: 'There is no tasks for the actual weather'});
    }
}

export function getAllTasksController(req: Request, res: Response): void {
    const tasks = getAllTasks();

    if (tasks.length !== 0){
        res.json({tasks: tasks}); 
    } else {
        res.status(404).json({message: 'There is no tasks'});
    }
}

export function addTaskController(req: Request, res: Response): void {
    const { name, description, is_complete, weather} = req.body;

    const array_length = tasks.length;
    const task = tasks[array_length-1]
    const task_id = (task) ? task.id+1 : 1;

    if (!name || !description || !weather || is_complete === undefined) {
        res.status(400).json({ message: 'Task could not be added' });
    } else {
        const new_task: Task = {
            id: task_id,
            name: name,
            description: description,
            is_complete: is_complete,
            weather: weather
        };
        
        const task = addTask(new_task);
        
        if (task){
            res.status(201).json({task: task}); 
        } else {
            res.status(400).json({message: 'Task could not be added'});
        }
    }
}

export function getTaskByIdController(req: Request, res: Response): void {
    const { id } = req.params;
    const task_id = parseInt(id, 10);
    const task = getTaskById(task_id);

    if (task){
        res.json(task); 
    } else {
        res.status(404).json({message: 'Task not found'});
    }
}

export function updateTaskController(req: Request, res: Response): void {
    const { id } = req.params;
    const task_id = parseInt(id, 10);
    const { name, description, is_complete, weather} = req.body;

    if (!name || !description || !weather || is_complete === undefined) {
        res.status(400).json({ message: 'Task could not be updated' });
    } else {
        const task: Task = {
            id: task_id,
            name: name,
            description: description,
            is_complete: is_complete,
            weather: weather
        };
    
        const task_updated = updateTask(task, task_id);
        if (task_updated){
            res.json(task_updated);
        } else {
            res.status(404).json({message: 'Task not found'});
        }
    }
}

export function deleteTaskController(req: Request, res: Response): void {
    const { id } = req.params;
    const task_id = parseInt(id, 10);

    const task_deleted = deleteTask(task_id);
    if (task_deleted) {
        res.json(deleteTask);
    } else {
        res.status(404).json({message: 'Task not found'});
    }
}