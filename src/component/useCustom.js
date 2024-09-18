import React, { useEffect, useState } from 'react'

export const useCustom = () => {
    const [x, setx] = useState([])
    const arr=['ahmed','barrakat']
 useEffect(()=>{
setx(arr)
 },[])
 return x
}
