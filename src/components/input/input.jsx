import React from 'react'
import './style.css'

const Input = ({placeholder, type, onChange, value, ind, id}) => {
  return (
    <input type={type} placeholder={placeholder} onChange={(e)=>onChange(ind, e)} className='input-class'  value={value} id={id}/>
  )
}

export default Input