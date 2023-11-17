import search from '../assets/img/magnifying-glass.svg';

export default function Forms(){
    return (
        <section className="main-forms">
            <section className="search-bar">
                <form action="" className="search-bar-form">
                    <input type="search" placeholder="Pesquise sua tarefa"/>
                    <button type="submit"><img src={search} alt=""/></button>
                </form>
            </section>
            <section className="filter-bar">
                <form action="" className="filter-bar-form">
                    <select id="" name="">
                        <option value="" selected>Select a option</option>
                        <option value="">Filtrar com o tempo</option>
                    </select>
                    <button type="submit">Filtrar</button>
                </form>
            </section>
            <section className="add-tasks">
                <button>Adicionar Tarefa</button>
            </section>
        </section>
    );
}