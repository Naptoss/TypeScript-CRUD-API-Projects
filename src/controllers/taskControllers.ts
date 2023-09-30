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

// Importa o Request e Response para podermos manipular a Api
import { Request, Response } from 'express';

// Importa a função que pega o clima da cidade escolhida
import getWeatherData from '../utils/weatherUtils'

// Necessário refatorar as funções posteriormente e fazer uma melhor filtragem
// dos dados que serão recebidos; Tratar os eventuais erros.

export async function getTaskByWeatherController(req: Request, res: Response): Promise<void> {
    const current_weather: WeatherChoices = await getWeatherData("Maceió");
    const tasks = getTaskByWeather(current_weather);

    if (tasks){
        res.json({tasks: tasks, weather: current_weather}); 
    } else {
        res.status(404).json({message: 'Por que essa bomba não atualiza'});
    }
}

export function getAllTasksController(req: Request, res: Response): void {
    const tasks = getAllTasks();
    res.json(tasks);
}

export function addTaskController(req: Request, res: Response): void {
    const new_task = req.body;
    const task = addTask(new_task);
    res.status(201).json(task);
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
    const task: Task = req.body;

    const task_updated = updateTask(task, task_id);
    if (task_updated){
        res.json(task_updated);
    } else {
        res.status(404).json({message: 'Task not found'});
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