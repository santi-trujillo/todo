import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {

    const onClickButton = () => {
        alert('modal');
    }

    return (
        <button
        className="CreateTodoButton"
        onClick={() => onClickButton('Aqui va el modal')}
    >
        +
    </button>
    );
}

export { CreateTodoButton };