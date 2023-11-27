import axios from 'axios';
import React, { useState } from 'react';

interface IModel {
    isClicked: boolean;
    setClick: (isClicked: boolean) => void;
}

interface Task {
    id: number;
    name: string;
    description: string;
    is_complete: boolean;
}

const ModalForm: React.FC<IModel> = ({ isClicked, setClick }) => {
    const [formData, setFormData] = useState<Task>({
        id: 0, 
        name: '',
        description: '',
        is_complete: false,
    });

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        try {
            const response = await axios.post<Task>('/api/tasks/add/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Tarefa adicionada: ', response.data);

            setClick(false);
        } catch (error) {
            console.error('Erro ao adicionar', error);
        }
    };

    return (
        <>
            {isClicked && (
                <div className="background">
                    <div className="modal">
                        <button className="btn-exit" onClick={() => setClick(!isClicked)}>
                            X
                        </button>
                        <section className="add-form-container">
                            <form className="add-form" onSubmit={handleFormSubmit}>
                                <label htmlFor="taskName">Nome da Tarefa:</label>
                                <input
                                    type="text"
                                    id="taskName"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                <label htmlFor="taskDescription">Descrição da Tarefa:</label>
                                <textarea
                                    id="taskDescription"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                ></textarea>
                                <label htmlFor="isComplete">Completa:</label>
                                <input
                                    type="checkbox"
                                    id="isComplete"
                                    checked={formData.is_complete}
                                    onChange={(e) => setFormData({ ...formData, is_complete: e.target.checked })}
                                />
                                <button type="submit">Salvar</button>
                            </form>
                        </section>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalForm;

