"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa as funções do controller
const taskControllers_1 = require("../controllers/taskControllers");
// Importa o express
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Rota que mostra todas as tasks
router.get('/', taskControllers_1.getAllTasksController);
// Rota que adiciona uma nova task
router.post('/add/', taskControllers_1.addTaskController);
// Rota que mostra task com base no id
router.get('/list/:id', taskControllers_1.getTaskByIdController);
// Rota que atualiza uma task
router.put('/update/:id', taskControllers_1.updateTaskController);
// Rota que deleta uma task
router.delete('/delete/:id', taskControllers_1.deleteTaskController);
exports.default = router;
