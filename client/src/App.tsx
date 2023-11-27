import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import UpdateForm from './components/UpdateModalForm';
import SearchForm from './components/SearchForm';
import Addtask from './components/AddTask';
import { Task } from './components/interfaceMask';

const App: React.FC = () => {
  const [updateFormVisible, setUpdateFormVisible] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchResult, setSearchResult] = useState<Task[]>([]);
  const [forceReload, setForceReload] = useState<boolean>(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get<Task[]>('/api/tasks');
        setTasks(response.data);
        setSearchResult(response.data);
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };

    fetchTasks();

  }, [forceReload]);

  return (
    <div className="container">
      <main>
        <section className="main-forms">
            <SearchForm tasks={tasks} setSearchResult={setSearchResult}/>
            <Addtask/>
        </section>
        <TaskList searchResult={searchResult} setUpdateFormVisible={setUpdateFormVisible} setSelectedTaskId={setSelectedTaskId} setForceReload={setForceReload} reloadValue={forceReload}/>
        <UpdateForm isUpdateClicked={updateFormVisible} setUpdateClick={setUpdateFormVisible} taskId ={selectedTaskId} />
      </main>
    </div>
  );
};

export default App;



