import "./LoadingToDos.css";

function LoadingToDos() {
    return (
        <div className="LoadingToDo-container">
            <span className="LoadingToDo-completedIcon"></span>
            <p className="LoadingToDo-text"></p>
            <span className="LoadingToDo-deleteIcon"></span>
        </div>
    );
}

export { LoadingToDos };