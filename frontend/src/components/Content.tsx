import deleteIcon from '../assets/img/recycle-bin-2.svg';
import editIcon from '../assets/img/wrench.svg';

export default function Content(){
    return (
        <section className="main-content">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Status</th>
                        <th>Tempo</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Varrer</td>
                        <td><div className="ativo">Completo</div></td>
                        <td>Chuvoso</td>
                        <td>
                            <div className="actions">
                                <img src={deleteIcon} alt=""/>
                                <img src={editIcon} alt=""/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}