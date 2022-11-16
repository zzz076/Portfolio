import React from "react"
import  ReactDOM  from "react-dom";
import Form from "./components/Form"
import TodoList from "./components/Todolist"


function App() {

  const [inputText,setInputText] = React.useState('')
  const [todos,setTodos] = React.useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [status, setStatus] =React.useState('all')
  const [filteredTodos,setFilteredTodos] = React.useState([])



React.useEffect(()=>{
  filteredTodosHandler()
  localStorage.setItem("todos",JSON.stringify(todos))
},[status,todos]
)


const filteredTodosHandler = ()=>{
  switch (status) {
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed ===true))
    break;
    case 'uncompleted':
      setFilteredTodos(todos.filter(todo => todo.completed ===false))
    break;
    default:
      setFilteredTodos(todos)
      break;
  }
}

  return (
    <div className="App">
      <header>
        <h1>Tim's Todo List</h1>
      </header>
    <Form inputText={inputText} setInputText={setInputText} setStatus={setStatus} status={status} setTodos={setTodos} todos={todos}/>
    <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
