import ModalForm from "./ModalForm";
import { useState } from "react";

export default function Addtask(){
    const [ click, setClick ] = useState<boolean>(false);

    return (
        <section className="add-tasks">
            <button className="add-button" onClick={() => setClick(!click)}>Adicionar Tarefa</button>
            <ModalForm isClicked={click} setClick={setClick}/>
        </section>
    );
}