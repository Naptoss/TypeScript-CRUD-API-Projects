import { Schema, model, Document } from 'mongoose';

// Modelo da Task
interface Task extends Document {
    id: number;
    name: string;
    description: string;
    is_complete: boolean;
}

const TaskSchema = new Schema<Task>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    is_complete: { type: Boolean, required: true },
});

const TaskModel = model<Task>('Task', TaskSchema);

export default TaskModel;
export { Task };