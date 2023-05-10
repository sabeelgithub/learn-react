import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowLabel } from "../Redux/store";


// import { connect } from "react-redux";

// class Settings extends React.Component{

//     render() {
//         const {
//             value,
//             myIncrement,myDecrement
//         }=this.props
//         console.log(this.props)
//         return(
//             <div>
//                 <div className='usage'>
//                     <div className='usage-item'>
//                         <button onClick={()=>myIncrement()} >Increment</button>
//                         <label htmlFor="">{value}</label>
//                         <button  onClick={()=>myDecrement()}  >Decrement</button>
//                     </div>
//                 </div> 
//             </div>
//         )
//     }
        
    
// }
// const mapStatetoProps = (state)=>{
//     return {
//         value:state.value
//     }
// }
// const mapDispatchToProps = (dispatch)=>{
//     return {
//         myIncrement:()=>{
//             dispatch({
//                 type:'increment'
//             })

//         },
//         myDecrement:()=>{
//             dispatch({
//                 type:'decrement'
//             })

//         }
//     }
// }
// export default connect(mapStatetoProps,mapDispatchToProps)(Settings)


function Settings() {
  
  const dispatch = useDispatch()
  const handleShowlabel= (evt)=>{
    const checkboxValue = evt.target.checked
    dispatch(setShowLabel(checkboxValue))


  }
  const val = useSelector((state)=>state.showLabel)
  return (
    <div>
    
    <input checked={val} onChange={handleShowlabel} type="checkbox" />Show Label
  
    </div>
  )
}

export default Settings