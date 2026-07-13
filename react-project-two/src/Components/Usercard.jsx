import React from 'react'
import pic from '../assets/images.jfif'
import './Usercard.css'
function Usercard(props) {
  return (
    <div className='User-Container' style={props.style}>
        <p id='User-Title'>{props.name}</p>
        <img id='User-img' src={props.image} alt='Rashmi'></img>
        <p id='user-disp'>{props.desc}</p>
      
    </div>
  )
}

export default Usercard
