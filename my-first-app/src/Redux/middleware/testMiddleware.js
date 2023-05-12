function testMiddleware({dispatch,getState}) {
    return(next)=>{
        return(action)=>{
            console.log('PREV_STATE',getState())
            console.log('ACTION',action)
            next(action)
            console.log('NEXT_STATE',getState())
            console.log('------------')
        }
    }

}
export default testMiddleware