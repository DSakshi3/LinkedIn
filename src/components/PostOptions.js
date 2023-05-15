import { Avatar } from '@mui/material'
import React from 'react'
import '../css/PostOptions.css'

const PostOptions = ({ Icon, title}) => {
  return (
    <div className='postOptions'>
        <Icon />
        <h4>{title}</h4>
    </div>
  )
}

export default PostOptions