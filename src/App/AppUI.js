import React from 'react';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { LoadingToDos } from '../LoadingToDos';
import { ErrorToDos } from '../ErrorToDos';
import { EmptyToDos } from '../EmptyToDos';
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm";
import { ToDoContext } from '../ToDoContext';

function AppUI() {
    const {
        searchedToDos,
        completeToDo,
        deleteToDo,
        loading,
        error,
        openModal,
        setOpenModal
    } = React.useContext(ToDoContext);

    return (
        <>
            <ToDoCounter />
            <ToDoSearch />
            <ToDoList>
                {loading &&
                    (
                        <>
                            <LoadingToDos />
                            <LoadingToDos />
                            <LoadingToDos />
                        </>
                    )
                }
                {error && <ErrorToDos />}
                {(!loading && !error && searchedToDos.length === 0) && <EmptyToDos />}
                {
                    searchedToDos.map(
                        toDo => (
                            <ToDoItem
                                key={toDo.id}
                                text={toDo.text}
                                completed={toDo.completed}
                                onComplete={() => completeToDo(toDo.id)}
                                onDelete={() => deleteToDo(toDo.id)}
                            />
                        )
                    )
                }
            </ToDoList>

            <CreateToDoButton
                setOpenModal={setOpenModal}
            />

            {openModal &&
                (
                    <Modal>
                        <ToDoForm/>
                    </Modal>
                )
            }
        </>
    );
}

export { AppUI };
