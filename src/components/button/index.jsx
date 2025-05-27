import React from 'react';
import './style.css'

const Button = ({ btntext , onClick}) => {
  return <button className='btn' onClick={onClick}>{btntext}</button>;
};

export default Button;
