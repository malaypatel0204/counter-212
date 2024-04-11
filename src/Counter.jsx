import React, { useState } from 'react'

export const Counter = () => {
  

    const [value,setValue] = useState(0);


    const handleCounter = ()=>{
        if(value > -5){

            setValue(value-1);
        }
    }  
    
    return (
        <div onClick={handleCounter}>{value}</div>
    )
}
