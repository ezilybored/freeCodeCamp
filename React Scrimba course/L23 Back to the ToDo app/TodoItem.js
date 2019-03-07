import React from "react"

function TodoItem(props) {
    // The checked property takes a boolean value from the data object and ticks the checkbox if true
    return (
        <div className="todo-item" >
            <input type="checkbox" checked={props.todo.completed}/>
            <p>{props.todo.text}</p>
        </div>
    )
}

export default TodoItem