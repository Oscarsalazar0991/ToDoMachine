import React from 'react';
import './ToDoCounter.css';
import { ToDoContext } from '../ToDoContext';

function ToDoCounter() {
    const {
        completedToDos,
        totalToDos
    } = React.useContext(ToDoContext);

    return (
        completedToDos === totalToDos ?
            <h1 className='ToDoCounter'>
                Has completado Todos los ToDos
            </h1>
            :
            <h1 className='ToDoCounter'>
                Has completado <span>{completedToDos}</span> de <span>{totalToDos}</span> ToDos
            </h1>
    );
}

export { ToDoCounter };