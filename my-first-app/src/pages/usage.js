import React, { useEffect, useState } from 'react'
import './usage.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/store'

function Usage() {
  const value = useSelector((state)=>{
    console.log(state,'kiraaaaaaaa')
        return state.value

    })
  const dispatch = useDispatch()
  
  const [color,setColor] = useState('white')
  const [Boom,setBoom] = useState(false)
  useEffect(()=>{
    setBoom(false)
    const id = setTimeout(()=>{
        setBoom(true)
    },value*1000)

    return () =>{
        clearTimeout(id)
    }
  },[value])

  return (
    <div>
    <div className='usage'>
    <div className='usage-item' style={{background:color}}>
    <button onClick={()=>{
        dispatch(increment())
       
    }}>Increment</button>
    <label htmlFor="">{value}</label>
    <button onClick={()=>{
        dispatch(decrement())
       
    }}>Decrement</button>
    </div>
    <button onClick={()=>{
        setColor('green')
    }}>Green</button>
    <button onClick={()=>{
        setColor('blue')
    }}>Blue</button>
    </div>
       {
        Boom && value ? (
            <div className='boom'>
            <span>
            BOOM
            </span>
            </div>
        ) : null
       }
       
    </div>
  )
}

export default Usage