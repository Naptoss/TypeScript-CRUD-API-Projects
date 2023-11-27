import axios from 'axios';
import React, { useState, useEffect } from 'react';

interface IUpdateModel {
  isUpdateClicked: boolean;
  setUpdateClick: (isUpdateClicked: boolean) => void;
  taskId: string | null;
}

const UpdateForm: React.FC<IUpdateModel> = ({ isUpdateClicked, setUpdateClick, taskId }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    is_complete: false,
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.put(`/api/tasks/update/${taskId}`);
        const taskData = response.data;

        setFormData({
          name: taskData.name,
          description: taskData.description,
          is_complete: taskData.is_complete,
        });
      } catch (error) {
        console.error('Erro ao obter a tarefa para atualização:', error);
      }
    };

    if (isUpdateClicked) {
      fetchTask();
    }
  }, [isUpdateClicked, taskId]);

  const handleUpdateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    try {
      const response = await axios.put(`/api/tasks/update/${taskId}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Tarefa atualizada:', response.data);
      
      setFormData({
        name: '',
        description: '',
        is_complete: false,
      });

      setUpdateClick(false);
    } catch (error) {
      console.error('Erro ao atualizar a tarefa:', error);
    }
  };

  return (
    <>
      {isUpdateClicked && (
        <div className="background">
          <div className="modal">
            <button className="btn-exit" onClick={() => setUpdateClick(false)}>
              X
            </button>
            <section className="add-form-container">
              <form className="add-form" onSubmit={handleUpdateSubmit}>
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
                <button type="submit">Salvar Atualização</button>
              </form>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateForm;
