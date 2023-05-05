// import React, { useEffect, useState } from "react";

// import Tools from "../components/Tools";
// import SimpleList from "../list/simplelist";
// import { Mycontext,Mynewcontext } from "../pages/mycontext";
// import Justinfo from "./justinfo";

// function Homepage() {
//     const [activeState, setActiveState] = useState('all')
//     const [showLabel,setShowLabel] = useState(true)
//     const [data,setData] = useState([])

//     useEffect(()=>{
//         fetch('/data.json')
//           .then((data)=>{
//               return data.json()
//           })
//           .then((data)=>{
//               setData(data)
//           })
//     },[])

//     const handleRefresh = () =>{
//         console.log('Refersh')
//         fetch('/data2.json')
//             .then((data)=>{
//                 return data.json()
//             })
//             .then((data)=>{
//                 setData(data)
//             })
//     }

//     const handleShowlabel = (evt)=>{
//         setShowLabel(evt.target.checked)

//     }
//     const handleDelete = (item)=>{
//         console.log('Delete',item)
//         const newList = filter((element)=>element.id !==item.id)
//         setData(newList)
//     }

//     const handleLabelClick = (arg) =>{
//         setActiveState(arg)
//     }

//     const onlistChange = (evt) =>{
//         const value = evt.target.value
//         setActiveState(value)
//     }

//     const newList = data.filter((item)=>{
//         if (activeState==='all'){
//             return true
//         }
//         if (activeState==='active'){
//             return item.isActive === true
//         }
//         if (activeState==='non-active'){
//             return item.isActive === false
//         }
//         return false
//     })
//     return (
//         <div>
//         <div>
//         <input checked={showLabel} onChange={handleShowlabel} type="checkbox" />Show Label
//         </div>
//          <Mynewcontext.Provider value={100}>
//         <Mycontext.Provider value={showLabel}>
//         <Tools labelValue={activeState} onAction={onlistChange} onRefresh={handleRefresh}>
//            <SimpleList onLabelClick={handleLabelClick} data={newList} onAction={handleDelete}/>
//         </Tools>
//         <Justinfo activeState={activeState}/>
//         </Mycontext.Provider>
//         </Mynewcontext.Provider>
//         </div>
//     )


// }
// export default Homepage

