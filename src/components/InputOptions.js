import React from 'react';
import '../css/InputOptions.css';


const InputOptions = ({Icon, title, color}) => {
  return (
    <div className='inputOptions'>
        <Icon style={{color: color}}></Icon>
        <h4>{title}</h4>
    </div>
  )
}

export default InputOptions