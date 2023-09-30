"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTaskByWeather = exports.getTaskById = exports.addTask = exports.getAllTasks = void 0;
// Exemplos de objetos para teste da Api
const tasks = [
    {
        id: 1,
        name: 'Tarefa 1',
        description: 'Descrição da tarefa 1',
        is_complete: false,
        weather: 'Clouds'
    },
    {
        id: 2,
        name: 'Tarefa 2',
        description: 'Descrição da tarefa 2',
        is_complete: true,
        weather: 'Clouds'
    },
    {
        id: 3,
        name: 'Tarefa 3',
        description: 'Descrição da tarefa 3',
        is_complete: true,
        weather: 'Clear'
    },
    {
        id: 4,
        name: 'Tarefa 4',
        description: 'Descrição da tarefa 4',
        is_complete: true,
        weather: 'Clear'
    },
];
// Necessário refatorar as funções posteriormente e fazer uma melhor filtragem
// dos dados que serão recebidos; Tratar os eventuais erros.
function getAllTasks() {
    return tasks;
}
exports.getAllTasks = getAllTasks;
function addTask(task) {
    tasks.push(task);
    return task;
}
exports.addTask = addTask;
function getTaskById(id) {
    return tasks.find((task) => task.id === id);
}
exports.getTaskById = getTaskById;
function getTaskByWeather(weather) {
    if (weather) {
        const filtered_tasks = tasks.filter((task) => task.weather === weather);
        return filtered_tasks;
    }
    return tasks;
}
exports.getTaskByWeather = getTaskByWeather;
function updateTask(task_updated, id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
        tasks[id] = { ...task_updated, id: id };
        return tasks[id];
    }
    else {
        return undefined;
    }
}
exports.updateTask = updateTask;
function deleteTask(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
        const task_deleted = tasks.splice(index, 1)[0];
        return task_deleted;
    }
    else {
        return undefined;
    }
}
exports.deleteTask = deleteTask;
