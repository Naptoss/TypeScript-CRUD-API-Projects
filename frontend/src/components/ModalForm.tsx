interface IModel {
    isClicked: boolean;
    setClick: (isClicked: boolean) => void;
}

export default function ModalForm({isClicked, setClick}: IModel){
    if (isClicked){
        return (
            <div className="background">
                <div className="modal">
                    <button className="btn-exit" onClick={() => setClick(!isClicked)}>X</button>
                    <section className="add-form-container">
                        <form action="" className="add-form">
                            <label htmlFor="">Nome da Tarefa: </label>
                            <input type="text" />
                            <label htmlFor="">Descrição da Tarefa</label>
                            <textarea name="" id=""></textarea>
                            <button type="submit">Salvar</button>
                        </form>
                    </section>
                </div>
            </div>
        );
    } else {
        return <></>
    }
}