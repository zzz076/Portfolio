import React from "react"
import ReactDom from "react-dom"
import './style.css';
import Form from "./components/Form"
import TodoList from "./components/TodoList";




function App() {

  const [inputText, setInputText] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [status, setStatus] = React.useState('all');
  const [filteredTodos,setFilteredTodos] = React.useState([])

// React.useEffect(()=>{
//   getLocalTodos();
// },[])

 React.useEffect(()=>{
  filterHandler();
  // saveLocalTodos();
 },[todos,status])
  
  const filterHandler = () =>{
    switch(status){ 
      case'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break; 
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
  }}

  // const saveLocalTodos = () => {
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //   };
  

  // const getLocalTodos = () =>{
  //   if (localStorage.getItem("todos") === null){
  //     localStorage.setItem('todos', JSON.stringify([]));
  //   }else{
  //     let todoLocal = JSON.parse(localStorage.getItem("todos"));   
  //     setTodos(todoLocal);
  //     console.log(todoLocal)
 
  //   }
  // }
  
  return (
    <div className="App">
      <header>
      <h1>Tim's Todo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} status={status} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
