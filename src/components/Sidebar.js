import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import '../css/Sidebar.css'
import { selectUser } from '../features/user/userSlice';

const Sidebar = () => {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
  const { displayName, photoUrl, description } = useSelector(selectUser);

  return (
    <div className='sidebar'>
        <div className="sidebar__container">
            <img src="https://media-exp1.licdn.com/dms/image/C5616AQEVd71w2CisoQ/profile-displaybackgroundimage-shrink_350_1400/0/1597660822929?e=1671062400&v=beta&t=jaeCDHX05610XmvZNnn-XgqUqacngdnFsZCEqv839NY" alt="#" />
            <div className="sidebar__userDescription">
                <Avatar className="sidebar__avatar" src={photoUrl}/>
                <h2>{displayName}</h2>
                <h4>{description}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who's viewed your profile</p>
                    <p>6,923</p>
                </div>
                <div className="sidebar__stat">
                    <p>Impressions of your post</p>
                    <p>10,234</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("Express JS")}
                {recentItem("Node JS")}
                {recentItem("Django")}
                {recentItem("Flask")}
                {recentItem("Docker")}
                {recentItem("Looking for Job")}
                {recentItem("Jobsearch")}
            </div>
        </div>
    </div>
  )
}

export default Sidebar