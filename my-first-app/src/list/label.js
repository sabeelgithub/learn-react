import React,{useContext, useEffect, useLayoutEffect, useRef, useState} from "react";
import './label.css';
import { Mycontext,Mynewcontext } from "../pages/mycontext";
import Tooltip from "./Tooltip";
import { useTooltip } from "../hooks/ourHooks";
import { useSelector } from "react-redux";

function Label(props) {
    // const val = useContext(Mycontext)
    const val = useSelector((state)=>state.showLabel)
    const val2 = useContext(Mynewcontext)
    const [showTooltip,setShowTooltip,labelRef,refObj] = useTooltip()
    
    console.log(val2)
    const active = props.isActive
    console.log(active)
    const style = active ? {background:'green'} : {background:'orange'}
    if (val===false) {
        return null
    }
    const handleMouseEnter = (evt) =>{
        // console.log(evt.target)
        // console.log(refObj.current)

        // const width1 = evt.target.getBoundingClientRect().width
        // const width2 = refObj.current.getBoundingClientRect().width
        // refObj.current.style.left = `${-(width2-width1)/2}px`
        // console.log(refObj.current.myTest())
        setShowTooltip(true)
    }
    const handleMouseLeave = () =>{
        setShowTooltip(false)
    }

    const text = props.isActive ? 'Active' : 'Non Active'
    
    return ( <div className="list-label-item-container">
    <span ref={labelRef}  onClick={() =>{
        props.onAction(props.isActive ? 'active' : 'non-active')
    }}
    
   className='list-label-item' style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >{text}</span>
  <Tooltip ref={refObj} showTooltip={showTooltip} message={`This is ${text}`}/>
   </div>
)}
export  default Label


