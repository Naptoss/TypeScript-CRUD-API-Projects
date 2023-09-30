// Importa as funções do controller
import { 
    getAllTasksController, 
    addTaskController, 
    getTaskByIdController, 
    updateTaskController, 
    deleteTaskController, 
} from '../controllers/taskControllers';

// Importa o express
import express from 'express';

const router = express.Router();

// Rota que mostra todas as tasks
router.get('/', getAllTasksController);

// Rota que adiciona uma nova task
router.post('/add/', addTaskController);

// Rota que mostra task com base no id
router.get('/list/:id', getTaskByIdController);

// Rota que atualiza uma task
router.put('/update/:id', updateTaskController);

// Rota que deleta uma task
router.delete('/delete/:id', deleteTaskController);

export default router;