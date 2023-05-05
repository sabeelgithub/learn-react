import React, { useImperativeHandle } from 'react'

function Tooltip(props,ref) {
    const {
      showTooltip,
      message
    }=props
    
    // useImperativeHandle(ref,()=>{
    //     return {
    //         myTest:()=>{
    //             console.log('HELLo im in My test')
    //         }

    //     }
    // })
    if  (!showTooltip){
        return null
    }
    return (
      <div>
      <label ref={ref} className="tooltip" htmlFor="">{message}</label>
      </div>
    )
  }
  


export default React.forwardRef(Tooltip)