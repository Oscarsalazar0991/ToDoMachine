import React from "react";
import './ToDoForm.css';
import { ToDoContext } from "../ToDoContext";

function ToDoForm() {
    const {
        addToDo,
        setOpenModal
    } = React.useContext(ToDoContext);

    const [newToDoValue, setNewToDoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();        
        addToDo(newToDoValue);
        setOpenModal(false);
    }

    const onCancel = (event) => {        
        setOpenModal(false);
    }

    const onChange = (event) => {        
        setNewToDoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea
            value={newToDoValue}
            onChange={onChange}
                Placeholder="Escribe tu nuevo ToDo"
            />
            <div className="ToDoForm-buttonContainer">
                <button
                    type="button"
                    className="ToDoForm-button ToDoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="ToDoForm-button ToDoForm-button--add"
                >
                    Agregar
                </button>
            </div>
        </form>
    )
}

export { ToDoForm };