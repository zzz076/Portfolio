import React from "react"
import Todo from "./Todo"
const TodoList = (props) =>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {props.filteredTodos.map(todo => (
                    <Todo 
                    todos={props.todos} 
                    setTodos={props.setTodos} 
                    key={todo.id} 
                    text={todo.text} 
                    todo={todo}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;