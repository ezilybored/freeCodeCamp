import React from "react"

// Creates a variable to store css stylings for this component
const styles = {
    fontSize: "20px",
}

function ToDoItem() {
    return(
        <div className="todoitem">
            <input type="checkbox" />
            // CSS stylings from variable implemented using style={}
            <p style={styles}>Placeholder text here</p>
        </div>
    )
}

export default ToDoItem
