import React from 'react';
import axios from 'axios';
import deleteIcon from '../assets/img/recycle-bin-2.svg'
interface DeleteButtonProps {
  taskId: string;
  onDeleteSuccess: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ taskId, onDeleteSuccess }) => {
  const handleDeleteClick = async () => {
    try {
      const confirmDelete = window.confirm('Tem certeza de que deseja excluir esta tarefa?');

      if (confirmDelete) {
        
        const deleteResponse = await axios.delete(`/api/tasks/delete/${taskId}`);
        
        
        console.log('Tarefa excluída com sucesso:', deleteResponse.data);
        
        
        onDeleteSuccess();
      }
    } catch (error) {
      console.error('Erro ao excluir a tarefa:', error);
      
    }
  };

  return (
    <img
      src={deleteIcon}
      alt="Delete"
      onClick={handleDeleteClick}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default DeleteButton;

