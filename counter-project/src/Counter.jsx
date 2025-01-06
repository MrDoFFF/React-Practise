import React from 'react'
import useCounter from './hooks/useCounter';
function Counter() {
const [count,inc,dec] = useCounter(0);

  return (
    <div style={{display:'flex' , justifyContent:'center', gap:'10px', marginTop:'7rem'}}>
      <button style={{backgroundColor:'red', borderRadius:'5px'}} onClick={dec}>-</button>
      <span>{count}</span>
      <button style={{backgroundColor:'blue',borderRadius:'5px', color:'white'}} onClick={inc}>+</button>
    </div>
  )
}

export default Counter