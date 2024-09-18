import React from 'react';

export default function Card(props) {
    function handelClick(){
        props.click()
    }
  return (
    <>
   

    <div className="card" >
        
        <div className="title">{props.title}</div>
        {props.children}
        <button onClick={handelClick}>click</button>
       
    </div>
   
    </>
  )
}
