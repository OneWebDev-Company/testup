import React, { useEffect, useState } from "react";
import "../ToDoList/ToDoList.css";

export default function ToDoList() {
  const [newValue, setnewValue] = useState("");
  const [todos, settodos] = useState(()=>{
    const localValue=localStorage.getItem('ITEMS')
    if(localValue == null) return []
    return JSON.parse(localValue)
  });
  useEffect(() => {
    localStorage.setItem('ITEMS',JSON.stringify(todos))
  }, [todos])
  
  function handelSubmit(e) {
    e.preventDefault();
    settodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newValue, completed: false },
      ];
    });
    
    setnewValue("");
  }
  function toggleToDo(id,completed){
settodos(currentTodos=>{
    return currentTodos.map(todo => {
        if(todo.id===id){
            return{...todo,completed}
        }
        return todo
    })
})
  }
  function deleteToDo(id){
    settodos(currentTodos=>{
      return  currentTodos.filter(todos=>todos.id !==id)
    })
  }
  return (
    <>
      <form action="" onSubmit={handelSubmit} className="formToDo">
        <label htmlFor="task">NewItem</label>
        <input
          type="text"
          id="task"
          onChange={(e) => setnewValue(e.target.value)}
          value={newValue}
        />
        <button>Add</button>
      </form>
      <h1 className="titleToDo">ToDoList</h1>
      {todos.length === 0 && <>
      <h4 className="titleToDo">no data</h4>
      </>}
      <ul className="ListToDo">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label htmlFor="">
                <input type="checkbox" name="" id="" checked={todo.completed} onChange={(e)=>toggleToDo(todo.id,e.target.checked)} />
                {todo.title}
              </label>
              <button type="button" onClick={()=>deleteToDo(todo.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
