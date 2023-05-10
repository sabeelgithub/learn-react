import React, { useState } from 'react'

function NewCounter() {
  const [count,setCount] = useState(0)
  const [color,setColor]= useState('')
  return (
    <div>
    <div className="counter">
    <div style={{display:'flex',justifyContent:'space-around'}}>
    <button onClick={()=>{
        setCount(count+1)
        setColor('red')
    }}>+</button>
    <div  style={{width:'100px',display:'flex',justifyContent:'center',backgroundColor:color}}>{count}</div>
   
    <button onClick={()=>{
        setCount(count-1)
        setColor('green')
    }}>-</button>
    </div>
    </div>
    </div>
  )
}

export default NewCounter