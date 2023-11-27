import React, { useState } from 'react';
import UpdateButton from './UpdateButton';
import DeleteButton from './DeleteButton';
import { Task } from './interfaceMask';

interface TaskListProps {
  searchResult: Task[];
  setUpdateFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTaskId: React.Dispatch<React.SetStateAction<string | null>>;
  reloadValue: boolean;
  setForceReload: (reloadValue: boolean) => void;
}

const TaskList: React.FC<TaskListProps> = ({ searchResult, setUpdateFormVisible, setSelectedTaskId, setForceReload, reloadValue }) => {

  const handleUpdateSuccess = (taskId: string) => {
    setSelectedTaskId(taskId);
    setUpdateFormVisible(true);
  };

  const handleDeleteSuccess = () => {
    setForceReload(!reloadValue);
    console.log('Exclusão bem-sucedida. Atualizando a lista de tarefas...');
  };

  return (
    <section className="main-content">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {searchResult.map((task) => (
            <tr key={task._id}>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>
              {task.is_complete ? 
              <div className="ativo">Completo</div> 
              : 
              <div className="desativado">Incompleto</div>
              }
              </td>
              <td>
                <div className="actions">
                  <DeleteButton taskId={task._id} onDeleteSuccess={handleDeleteSuccess} />
                  <UpdateButton taskId={task._id} setUpdateFormVisible={() => handleUpdateSuccess(task._id)}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TaskList;
