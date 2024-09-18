import React, { useState } from 'react'
import '../sidebar/Sidebar.css'
import { IoMdMenu } from "react-icons/io";




export default function Sidebar() {
    const [show, setshow] = useState(false)
  return <>
  <div className={show ? 'sidebar1':'sidebar'}>
    <div className="main" >
    <IoMdMenu  className='icon' onClick={()=>setshow(!show)} />


    </div>
    <ul>
      <li className='list'>
        {show ? <IoMdMenu className='icon'/> :<><IoMdMenu className='icon'/> <a href="">home</a></>}
       
        
      </li>
    </ul>
   
  </div>
  </>
}
