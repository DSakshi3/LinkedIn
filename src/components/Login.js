import React, { useState } from 'react'
import loginLogo from '../images/loginLogo.svg';
import '../css/Login.css'
import { auth, db } from '../firebaseAppConfig';
import { useDispatch } from 'react-redux';
import { login } from '../features/user/userSlice';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const dispatch = useDispatch();

  const register = () => {
    if(!name) {
      return alert('Enter Your Full Name');
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,

      })
      .then(()=> {
        db.collection('user').add({
          name: userAuth.user.displayName,
          uid: userAuth.user.uid,
          description: description
        })
        dispatch(login({
          email : userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl:  userAuth.user.photoURL,
          description: description
        }))
      })
    }).catch((error) => alert(error));
  }

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((userAuth) => {
      dispatch(login({
        email : userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoUrl:  userAuth.user.photoURL,
        description: description
      }))
    }).catch((error) => alert(error));
  }

  return (
    <div className='login'>
        <div className="login__container">
          <img src={loginLogo} alt="#"  />
          <form action="submit">
            <input placeholder="Full Name  (required if registering)" value={name} onChange={(e) => setName(e.target.value)} type="text" />
            <input placeholder="Describe Youself required if registering)" value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
            <input placeholder="Profile pic URL (optional)" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text" />
            <input placeholder='Enter Email (Required)' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="loginform__email" />
            <input placeholder='Enter Password (Required)' value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="loginform__password" />
            <button type='submit' onClick={loginToApp}>Sign In</button>
          </form>
          <p>
            Not a member?{"     "}<span className='login__register' onClick={register}>Create Accout</span>
          </p>
        </div>
    </div>
  )
}

export default Login