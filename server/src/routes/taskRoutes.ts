// routes.ts
import express from 'express';
import Task from '../models/taskModels'; // Remova as chaves {}

import taskController from '../controllers/taskControllers';

const router = express.Router();

// Rota que mostra todas as tasks
router.get('/', taskController.getAllTasks);

// Rota que adiciona uma nova task
router.post('/add/', taskController.createTask);

// Rota que mostra task com base no id
router.get('/list/:id', taskController.getTaskById);

// Rota que atualiza uma task
router.put('/update/:id', taskController.updateTaskById);

// Rota que deleta uma task
router.delete('/delete/:id', taskController.deleteTaskById);

export default router;