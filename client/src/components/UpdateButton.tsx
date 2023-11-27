import React, { useState } from 'react';
import editIcon from '../assets/img/wrench.svg'

interface UpdateButtonProps {
  taskId: string;
  setUpdateFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateButton: React.FC<UpdateButtonProps> = ({ taskId, setUpdateFormVisible }) => {
  const handleUpdateClick = () => {
    // Isso define o formulário de atualização como visível
    setUpdateFormVisible(true);
  };

  return (
    <img
      src={editIcon}
      alt="Edit"
      onClick={handleUpdateClick}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default UpdateButton;
