import {Schema, model, Document} from 'mongoose';
// Exemplo de tipos de string que weather pode ser
export type WeatherChoices = 'Clouds' | 'Clear' | 'Rain';


// Modelo da Task
// Necessário alterar o type posteriormente do weather, ou removê-lo e colocá-lo como tipo string
// e tratar se o clima que ele recebeu existe, há de se decidir como vai ser.
interface Task extends Document {
    id: number;
    name: string;
    description: string;
    is_complete: boolean;
    weather: WeatherChoices;
}

const TaskSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    is_complete: {type: Boolean, required: true},
    weather: {type: String, required: true}
});

export default model<Task>('Task', TaskSchema)