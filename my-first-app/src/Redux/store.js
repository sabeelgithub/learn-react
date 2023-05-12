import {applyMiddleware, combineReducers, createStore} from 'redux'
import testMiddleware from './middleware/testMiddleware'
import logger from 'redux-logger'

const appReducer = combineReducers({
    value,
    showLabel,

})

// function appReducer(prevState=initialState,action){
//    return {
//     value:valueReducer(prevState.value,action),
//     showLabel:showLabelReducer(prevState.showLabel,action)
//    }
// }

function value(prevState=0,action){
    switch (action.type){
        case 'increment':
            return prevState+1
    
        case 'decrement':
            return prevState-1
             

        
        default:
            return prevState
        
        
    }

}
function showLabel(prevState=true,action){
    switch (action.type){
        case 'show-label':
            return action.payload
        
        default:
            return prevState
        
        
    }

}
// function dataInfo(state={
//     data:[],
//     error:'',
//     loading:false

// },action){
//     switch(action.type){
//         case 'set-data':
//             return{
//                 ...state,
//                 data:action.payload
//             }
//         case 'loading':
//                 return{
//                     ...state,
//                     loading:action.payload
//                 }
//         case 'error':
//                     return{
//                         ...state,
//                         error:action.payload
//                     }
//         default:
//             return state
//     }

// }

// function setData(data){
//     return {
//         type:'set-data',
//         payload:data
//     }
// }
// function setLoading(isLoading) {
//     return {
//         type:'loading',
//         payload:isLoading
//     }
// }
// function setError(error){
//     return {
//         type:'error',
//         payload:error
//     }
// }

function increment() {
    return {
        type:'increment'
    }
}

function decrement() {
    return {
        type:'decrement'
    }
}
function setShowLabel(payload){
    return {
        type:'show-label',
        payload:payload
    }
}
const store = createStore(appReducer,applyMiddleware(logger))
// const state = store.getState()
// store.subscribe(()=>{

//     document.getElementById('value').innerText=store.getState().value
// })

// document.getElementById('increment').onclick = ()=>{
//     store.dispatch({
//         type:'increment'
//     })
// }
// document.getElementById('decrement').onclick = ()=>{
//     store.dispatch({
//         type:'decrement'
//     })
// }
export default store
export {
    increment,decrement,setShowLabel
}