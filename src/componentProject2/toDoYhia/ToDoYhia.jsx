import React, { useState } from 'react';
import './ToDoYhia.css';
import { useRef } from 'react';

export default function ToDoYhia() {
  
    const [todos, settodos] = useState([])
    const r=useRef()
    const handelAdd =()=>{
        const text=r.current.value;
        const newItem={val:text,completed:false};
        settodos([...todos,newItem]);
     
}
const handelDone =(i)=>{
const newTo=[...todos]
newTo[i].completed=!newTo[i].completed
settodos(newTo)
}
const deleteFun=(i)=>{

const item =[...todos]
item.splice(i,1)
settodos(item)
}

  return (
  <>
<div className="yhia-container">
    <div className="yhia-title">
        <h2>To Do List</h2>
    </div>
    <ul>
        {todos.map((e,i)=>{

             return <div key={i} className='list'>
              <li className={e.completed? 'done':''} onClick={()=>{handelDone(i)}}>{e.val}</li>
              <span onClick={()=>{deleteFun(i)}}>X</span>
             </div>
        })}
   
    </ul>
    <input ref={r} type="text" />
    <button onClick={()=>{handelAdd()}}>Add</button>
</div>
  </>
  )
}
