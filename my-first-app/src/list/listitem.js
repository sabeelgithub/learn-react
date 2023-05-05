import React from "react"
import Label from "./label"
import './listitem.css';
import Label2 from "./label2";
import { useTooltip } from "../hooks/ourHooks";
import Tooltip from "./Tooltip";





function Listitem(props) {
    console.log('render listitem')
    const {
      title,
      description,
      isActive,
      onDelete,
      onLabelClick,
      
    }= props
    
    const [showTooltip,setShowTooltip,labelRef,refObj] = useTooltip()
    
    

    return (
      <div className='list-item'>
      <hr/>
      <div className='list-title'>
        <h4>{title}</h4>
        <label onClick={onDelete} ref={labelRef} onMouseEnter={()=>setShowTooltip(true)} onMouseLeave={()=>setShowTooltip(false)}>
        Delete
        <Tooltip ref={refObj} showTooltip={showTooltip} message="Delete this"/>
        </label>
      </div>
      <div className='list-descr'>{description}</div>
      <div className='list-label'>
        <Label isActive={isActive} onAction={onLabelClick}/>
      
        
      </div>
      <hr/>
    </div>
      
    )
  
  }
  export default Listitem