import logo from '../assets/img/microsoft-onedrive-logo-2.svg';
import sunset from '../assets/img/sunset.svg';
import wind from '../assets/img/wind-flow-1.svg';
import water from '../assets/img/water-drop.svg';

export default function SideBar(){
    return (
        <aside>
            <header className="aside-header">
                <img src={logo} alt="Logo"/>
                <h3>Todo Weather</h3> 
            </header>
            <section className="aside-content">
                <h3>
                    Estatísticas
                </h3>
                <ul>
                    <li><img src={sunset} alt=""/>Ensolarado - 30°C</li>
                    <li><img src={wind} alt=""/>Velocidade - 30 km/h</li>
                    <li><img src={water} alt=""/>Umidade - 30 ml/h</li>
                </ul>
            </section>
        </aside>
    );
}

