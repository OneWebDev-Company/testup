import React, { useEffect, useState,useRef, useContext, useReducer, useMemo } from 'react'
import { tryImport } from '../../tryImport'
import Card from '../Card/Card';
import { ahmed } from '../../App';
import { useCustom } from '../useCustom';


export default function Home() {
  // const useDispatch1=useDispatch()
//  const useselector1=useSelector((state)=>ahmedStore.getState())
//  console.log(useselector1)
  // const feax= async()=>{
  //   var result=await axios.get('https://jsonplaceholder.typicode.com/posts')
  //   console.log(result.data)
  // }
// feax()
  var randomColor='#'+Math.floor(Math.random()*16777215).toString(16);
  const [messi, setmessi] = useState(0)
  const m=useMemo(()=>{
  return  <div style={{backgroundColor:randomColor,width:'40px',height:'40px'}}></div>
  },[messi])
  const [crstiano, setcrstiano] = useState(0)
  const a=useCustom()
  // useEffect(()=>{
  //   console.log('a7a') //work in firt time when program run
  // },[])
  // useEffect(()=>{
  //   console.log('a7a') //work in any render
  // },)
  const initailVlaue=0;
  const reducer=(state ,action)=>{
    switch (action) {
      case 'plus':
         return state + 1 ;
    
      case 'minus':
         return state - 1 ;
      case 'reset':
         return 0; 
    
      default:
        return state;
    }

  }
const [state, dispatch] = useReducer(reducer, initailVlaue)
  const useContextAhmed=useContext(ahmed)
  const r=useRef([]);
  
const refFun=(e)=>{
 
if(e && !r.current.includes(e)){
  r.current.push(e)
}
}
  const [counter, setcounter] = useState(0)
  const [counter2, setcounter2] = useState(0)
  useEffect(() => {
    if (r.current.length > 0) {
      r.current[0].focus(); // Focuses the first element in the array
    }
  }, []);
 
  const handlePlus=()=>{
    setcounter(counter + 1)
  }
  const handleMinus=()=>{
    setcounter(counter - 1)
  }
  const handlePlus2=()=>{
    setcounter2(counter2 + 1)
  }
  const handleMinus2=()=>{
    setcounter2(counter2 - 1)
  }
 
  let arr=[{title:'ahmed'},{title:'barakat'},{title:'hassan'}]
  let click=()=>{
    console.log('test')
  }
  return (
    <>
    
    <div>{tryImport('try pass parm to fun')}</div>
    {arr.map((e,i) =>{
      return(

  <>
 
<Card title={e.title} key={i} click={click}>
          <h1>a7a ya hamed</h1>
        </Card>

  </>
        

      )
      
    })}

    <button onClick={handlePlus}>+</button>
    <h1>{counter}</h1>
    <button onClick={handleMinus}>-</button>
    <button  onClick={handlePlus2}>plus</button>
    <h1>{counter2}</h1>
    <button  onClick={handleMinus2}>minus</button>
    <input ref={refFun} placeholder="Element 1" />
      <input ref={refFun} placeholder="Element 2" />
      <button onClick={() => r.current[1].focus()}>Focus on Element 2</button>
      {/* <ahmed.Consumer>
{(e)=>{
  return(<h1>{e}</h1>)
}}
      </ahmed.Consumer> */}
      {useContextAhmed}
      <button onClick={()=>dispatch('plus')}>+</button>
      <button onClick={()=>dispatch('minus')}>-</button>
      <button onClick={()=>dispatch('reset')}>reset</button>
      {state}
      <br />
      {m}
      <button onClick={()=>{
        setmessi(messi + 1)
      }}>messi</button>
      <button onClick={()=>{
        setcrstiano(crstiano + 1)
      }}>cr7</button>

    {a.map((e,i)=>{
    return <> <h1 key={i}>{e}</h1></>
    })}
    <hr />
    <br />
    <hr />
    {/* <button onClick={()=>useDispatch1({type:'plus'})}>+</button>
    <button onClick={()=>useDispatch1({type:'minus'})}>-</button>
    <h1>{useselector1.x}</h1> */}
    </>


  )
}
