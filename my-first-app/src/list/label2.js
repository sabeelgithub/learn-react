import React from "react";

import { Mycontext,Mynewcontext } from "../pages/mycontext";


class Label2 extends React.Component{
    render(){
        console.log('render label2')
        const props = this.props
        const active = props.isActive
        console.log(active)
        const style = active ? {background:'green'} : {background:'orange'}
        console.log(this.context)
        return (
            
            <Mycontext.Consumer>
            {
                (val) =>{
                    console.log('Context value',val)
                    if (val===false) {
                        return null
                    }
                    return(
                        <span  onClick={() =>{
                            props.onAction(props.isActive ? 'active' : 'non-active')
                        }}
                       className='list-label-item' style={style} >{active ? "Active" : 'Non Active'}</span>
                    )

                }
            }
           
           </Mycontext.Consumer>
        )
 }
}
Label2.contextType = Mynewcontext
export  default Label2