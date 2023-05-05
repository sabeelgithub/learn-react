import React from 'react'

function Justinfo(props) {
  const {
    showLabel,
    testValue,
    onClick
  } = props
  console.log('render just info')
  return (
    <div>justinfo {showLabel}{testValue.activeState}{testValue.key}</div>
  )
}


export default React.memo(Justinfo,(prevProps,nextProps)=>{
  return false
})