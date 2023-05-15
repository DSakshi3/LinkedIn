import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import '../css/Feed.css';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {db} from '../firebaseAppConfig';
import GetAgo from '../functions/GetAgo';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState("");

    const { email, uid, displayName, photoUrl, description } = useSelector(selectUser);

    useEffect(() => {
        db.collection('posts')
            .orderBy('time', 'desc')
            .onSnapshot((snapshot)=>{
            // snapshot.docs.forEach(doc => {
            //     console.log(doc.data().time);
            // });
            // console.log("Printing sanapshots", (snapshot.docs))

            return setPosts(
                snapshot.docs.map((doc)=>{
                    // console.log("Data in doc time", doc.data().time);
                    return ({
                        id: doc.id,
                        data: doc.data()
                    });
                })
            )
            
        })
    }, []);
  
    const sendPosts = (e) => {
        e.preventDefault();
        if(message.replace(/^\s+|\s+$/g, '') === ''){
            alert("Post message is empty, please add some message")
            return
        }
        db.collection('posts').add({
            name: displayName,
            description: description,
            message: message,
            avatar: photoUrl,
            time: firebase.firestore.Timestamp.now()
        });
        setMessage('');
    }

  return (
    <div className='feed'>
        <div className="feed__input__container">
            <div className="feed__input">
                <CreateIcon/>
                <form>
                    <input value={message} onChange={(e)=>setMessage(e.target.value)} id="post_message" type="text" />
                    <button onClick={sendPosts} type="submit">Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9' />
                <InputOptions Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                <InputOptions Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                <InputOptions Icon={CalendarViewDayIcon} title='Write Article' color='#71C15E' />
            </div>
        </div>

        <FlipMove>
            {posts.map(({ id, data : {name, description, message, avatar, time }})=>{
                return <Post 
                        key = {id}
                        name={name}
                        description={description}
                        message={message}
                        avatar={avatar}
                        time={GetAgo(time)}
                    />
                
            })}
        </FlipMove>
        {/* <Post 
            name="Siddartha Kodaboina"
            description="SWE II @ Sandvine | 5★ @ Codechef | 6★ @ Hackerrank | IARE"
            message="Hope this gonna work, Now"
            avatar="https://cdn.resfu.com/media/img_news/messi-posa-con-su-primer-balon-de-oro-en-2009--afp.jpg"
            time="4"
        /> */}
    </div>
  )
}

export default Feed