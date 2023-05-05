import React from "react";

import Tools from "../components/Tools";
import SimpleList from "../list/simplelist";
import { Mycontext,Mynewcontext } from "../pages/mycontext";
import Justinfo from "./justinfo";


class Homepage extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            data:[],
            activeState:'all',
            message:'',
            showLabel:true
        }
    }
    componentDidMount() {
        console.log('componentDidMount')
        fetch('/data.json')
            .then((data) =>{
                return data.json()
            })
            .then((data)=>{
                console.log(data,'data in mount')
                this.setState({
                    data:data
                })
            })

    }
    handleRefresh=()=>{
        console.log('Refresh')
        fetch('/data2.json')
          .then((data) => {
            console.log(data)
            return data.json()
          })
          .then((data) => {
            console.log(data, 'in second ')
            this.setState({
              data: data
            })
          })
      }
    componentDidUpdate(prevProps,prevState) {
        if (prevState.message !== this.state.message){
            this.setState({
                message:'Message'
            })
        }
        console.log('componentdidupdate')
    
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    onlistChange=(evt)=> {
        console.log(evt.target.value)
        const value = evt.target.value
       
        this.setState({
            activeState:value
        })
    }
    handleDelete = (item)=>{
        console.log('Delete',item)
        const newList = this.state.data.filter((element)=>element.id !==item.id)
        this.setState({
            data:newList
        })
    }
    handleLabelClick = (arg) =>{
        this.setState({
            activeState:arg
        })
    }
    handleShowlabel = (evt) =>{
        this.setState({
            showLabel:evt.target.checked
        })
    }

    render() {
        console.log('render home')
        const{
            data,
            activeState
        } = this.state
        const newList = data.filter((item) =>{
            if (activeState === 'all'){
                return true
            }
            if (activeState==='active'){
                return item.isActice === true
            }
            if (activeState==='non-active'){
                return item.isActice === false
            }
            return false
        })  
        console.log('render')
        return (
            <div>
            <div>
            <input checked={this.state.showLabel} onChange={this.handleShowlabel} type="checkbox" />Show Label
            </div>
             <Mynewcontext.Provider value={100}>
            <Mycontext.Provider value={this.state.showLabel}>
            <Tools labelValue={activeState} onAction={this.onlistChange} onRefresh={this.handleRefresh}>
               <SimpleList onLabelClick={this.handleLabelClick} data={newList} onAction={this.handleDelete}/>
            </Tools>
            <Justinfo activeState={activeState}/>
            </Mycontext.Provider>
            </Mynewcontext.Provider>
            </div>
        )
  }
}
export default Homepage
