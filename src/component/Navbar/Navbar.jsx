import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import'../Navbar/Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [showmenu, setshowmenu] = useState(false)
    const [screanWidth, setscreanWidth] = useState(window.innerWidth)
    const show=()=>{
        setshowmenu(!showmenu)
    }
  return (
 
    <div className="nav">
        {showmenu ?<>       <span className='menuIcon'>
<IoMdMenu onClick={show}/>
        </span>
        <ul>
         
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
               <Link to="/about">about</Link>
            </li>
            <li>
               <Link to="/contact">contact</Link>
            </li>

        </ul> </>:     <> <span className='menuIcon'>
<IoMdMenu onClick={show}/>
        </span></>}
    
   
     
    </div>
  )
}
