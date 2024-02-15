import React from "react";
import { useLocalStorage } from './useLocalStorage';

const ToDoContext = React.createContext();

function ToDoProvider({ children }) {
    const { item: toDos, saveItem: saveToDo, loading, error } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedToDos = toDos.filter(toDo => toDo.completed).length;

    const totalToDos = toDos.length;

    const searchedToDos = toDos.filter(
        toDo => {
            const toDoText = toDo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return toDoText.includes(searchText)
        }
    );

    const addToDo = (text) => {
        const newToDos = [...toDos];
        newToDos.push(
            {
                text,
                completed: false
            }
        );
        saveToDo(newToDos);
    }

    const completeToDo = (id) => {
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex(toDo => toDo.id === id);
        newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed;
        saveToDo(newToDos);
    };

    const deleteToDo = (id) => {
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex(toDo => toDo.id === id);
        newToDos.splice(toDoIndex, 1);
        saveToDo(newToDos);
    };

    return (
        <ToDoContext.Provider value={
            {
                completedToDos,
                totalToDos,
                searchValue,
                setSearchValue,
                searchedToDos,
                completeToDo,
                deleteToDo,
                loading,
                error,
                openModal,
                setOpenModal,
                addToDo
            }
        }>
            {children}
        </ToDoContext.Provider>
    )
};

export { ToDoContext, ToDoProvider }