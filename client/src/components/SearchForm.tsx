import search from '../assets/img/magnifying-glass.svg';
import React, { useState } from 'react';
import { Task } from './interfaceMask';

interface IModel {
    tasks: Task[];
    setSearchResult: (tasks: Task[]) => void;
}

const SearchForm: React.FC<IModel> = ({tasks, setSearchResult}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        if (!e.target.value) {
            setSearchResult(tasks);
        } else {
            const resultsArray = tasks.filter(task => task.name.includes(e.target.value));
            setSearchResult(resultsArray);
        }
    }

    return (
        <section className="search-bar">
            <form action="" className="search-bar-form">
                <input 
                type="search" 
                placeholder="Pesquise sua tarefa"
                onChange={handleSearchChange}
                />
                <button type="submit"><img src={search} alt=""/></button>
            </form>
        </section>
    );
}

export default SearchForm;