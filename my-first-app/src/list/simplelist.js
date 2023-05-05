import React from "react";
import Listitem from "./listitem";

function SimpleList(props) {
    console.log('render simple list')
    const {
        data,
        onAction,
        onLabelClick
    } = props
    return(
        <div className='app-list'>
        {
            data.map((obj)=>{
                console.log(obj,'lo')
                return <Listitem 
                key={obj.title} 
                title={obj.title} 
                description={obj.descr} 
                isActive={obj.isActice}
                onLabelClick={onLabelClick}
                onDelete = {()=>{
                    onAction(obj)
                }}
                />
            })
        }
        
    </div>
    )
}
export default SimpleList