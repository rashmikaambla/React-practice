import React from 'react'

function Card(props) {
  return (
    <div>
      <input type='text' onChange={(e)=>props.setName(e.target.value)}></input>
      <p>Name State variable ki value inside {props.title} : {props.name}</p>
    </div>
  )
}

export default Card
