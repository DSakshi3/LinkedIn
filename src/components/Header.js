import React from 'react'
import '../css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/user/userSlice';
import { auth } from '../firebaseAppConfig';


const Header = () => {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className="header">
        <div className="header__left">
            <img src="https://img.icons8.com/color/96/000000/linkedin.png" alt="#" />
            <div className="header__search">
                <SearchIcon />
                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <div className="header__right">
            
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            {
              user && <HeaderOption avatar={user.photoUrl} title="Me"/>
            }
            {
              user && <button onClick={logoutOfApp}>Sign Out</button>
            }
            

        </div>
    </div>
  )
}

export default Header