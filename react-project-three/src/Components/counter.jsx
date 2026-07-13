import React, { useState } from 'react'
import './counter.css'
function counter() {
  const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
      <p id="para">You have clicked {count} me</p>
      <button id="btn" onClick={()=> { setCount(count+1) }}>Click me</button>
    </div>
  )
}

export default counter
