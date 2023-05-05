import React, { Children } from "react";
import './Tools.css'
import AddNew from "./addNew";
import Button from "./button";

class Tools extends React.Component{
    render(){
        console.log('render tools')
        const {
            children,
            onAction,
            labelValue,
            onRefresh
        } = this.props

        const onlyChild = React.Children.only(children)
        const count = React.Children.count(onlyChild.props.children)
        return (
            <div className="list-tools">
            
                <div className="list-header">
                    <select value={labelValue} onChange={onAction} name='status'>
                        <option value='all'>All</option>
                        <option value='active'>Active</option>
                        <option value='non-active'>Non Active</option>
                    </select>
                  <AddNew/>
                  <Button onAgain={onRefresh}/>

                </div>
                {children}
                <div className="List-footer">
                Total {count} items

                </div>
            </div>
        )
    }
}
export default Tools;
