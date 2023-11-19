import search from '../assets/img/magnifying-glass.svg';

export default function SearchForm(){
    return (
        <section className="search-bar">
            <form action="" className="search-bar-form">
                <input type="search" placeholder="Pesquise sua tarefa"/>
                <button type="submit"><img src={search} alt=""/></button>
            </form>
        </section>
    );
}