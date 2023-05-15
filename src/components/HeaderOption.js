import React from 'react'
import { Avatar } from '@mui/material'
import '../css/HeaderOption.css'

const HeaderOption = ({ Icon, avatar, title }) => {
  return (
    <div className="headerOption">
        
        {Icon && <Icon className="headerOption__icon"/>}
        {avatar && <Avatar className="headerOption__avatar" src={avatar} />}
        <h3>{title}</h3>

    </div>
  )
}

export default HeaderOption