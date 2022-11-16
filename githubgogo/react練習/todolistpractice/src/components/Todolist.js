import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo"

export default function TodoList(props){
    return(
        <div className="todo-container">
            <ul className="todolist">
             {
                props.filteredTodos.map(todo=>
                   <Todo 
                        text={todo.text}
                        setTodos={props.setTodos}
                        id ={todo.id}
                        key = {todo.id}
                        todo ={todo}
                        todos = {props.todos}
                   /> 
                   )
             }
            </ul>
        </div>
    )
}