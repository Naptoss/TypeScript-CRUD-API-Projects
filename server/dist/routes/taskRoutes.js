"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes.ts
const express_1 = __importDefault(require("express"));
const taskControllers_1 = __importDefault(require("../controllers/taskControllers"));
const router = express_1.default.Router();
// Rota que mostra todas as tasks
router.get('/', taskControllers_1.default.getAllTasks);
// Rota que adiciona uma nova task
router.post('/add/', taskControllers_1.default.createTask);
// Rota que mostra task com base no id
router.get('/list/:id', taskControllers_1.default.getTaskById);
// Rota que atualiza uma task
router.put('/update/:id', taskControllers_1.default.updateTaskById);
// Rota que deleta uma task
router.delete('/delete/:id', taskControllers_1.default.deleteTaskById);
exports.default = router;
