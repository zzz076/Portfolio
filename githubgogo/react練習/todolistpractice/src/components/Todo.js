import React from "react";

export default function Todo(props){

  const deleteHandler = () =>{
    props.setTodos(props.todos.filter((e)=>e.id!==props.id))
  }

  const completedHandler =()=>{
   props.setTodos(props.todos.map((item)=>
    {if(item.id === props.id){
      return{
        ...item,
        completed: !item.completed
      }
    }
    return item
  }
 
   ))}


    return(
        <div className="todo">
          <li className={`todo-item ${props.todo.completed ?"completed" : ''}`}>{props.text}</li>
          <button onClick={completedHandler} className="complete-btn"><i class="fa-solid fa-check"></i></button>
          <button onClick={deleteHandler} className="trash-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        
    )
} 