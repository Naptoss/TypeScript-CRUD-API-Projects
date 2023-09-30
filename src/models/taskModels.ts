// Exemplo de tipos de string que weather pode ser
export type WeatherChoices = 'Clouds' | 'Clear' | 'Rain';

// Modelo da Task
// Necessário alterar o type posteriormente do weather, ou removê-lo e colocá-lo como tipo string
// e tratar se o clima que ele recebeu existe, há de se decidir como vai ser.
export interface Task {
    id: number;
    name: string;
    description: string;
    is_complete: boolean;
    weather: WeatherChoices;
    // Criar created_at: string que vai receber uma string com a data para poder calcular
    // há quanto tempo essa tarefa ainda não foi feita ou etc. 
}

// Exemplos de objetos para teste da Api
const tasks: Task[] = [
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

export function getAllTasks(): Task[] {
    return tasks;
}

export function addTask(task: Task): Task {
    tasks.push(task);
    return task;
}