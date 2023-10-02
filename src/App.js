import React, { useState } from "react";
import Todolist from "./Todolist";

function App() {
  let [data, setData] = useState([])
  const [inputValue, setInputValue] = useState("")

  let handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const dataFromLs = JSON.parse(localStorage.getItem('todos')) || []


  const addTodoItem = () => {
    setData([...dataFromLs, { name: `Item ${dataFromLs.length + 1}`, value: inputValue }])
    localStorage.setItem('todos', JSON.stringify(data))
    setInputValue("")
  }
  /* 
   Components are reusable parts of code
  */ 

   /*
    JSX is react's way of processing html
    JSX is just HTML but in react's way
   */

    //  React hooks are pre-defined functions made by react for you to use so that you can code easier
    //  useState hook chanegs the state something

  return (
     <>
      <input placeholder="Write Todo" onChange={handleChange} value={inputValue}/>
      <button onClick={addTodoItem}>Add Todo</button>
      <button>Clear Completed Todos</button>
      <Todolist data={data}/>
     </>
  );
}

export default App;
