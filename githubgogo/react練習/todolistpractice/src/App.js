import React from "react"
import  ReactDOM  from "react-dom";
import Form from "./components/Form"
import Todolist from "./components/Todolist"
import './App.css';

function App() {
  return (
    <div className="App">
        <Form />
        <Todolist />
    </div>
  );
}

export default App;
