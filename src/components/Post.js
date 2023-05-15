import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import '../css/Post.css'
import PostOptions from './PostOptions'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SendIcon from '@mui/icons-material/Send';
import CommentIcon from '@mui/icons-material/Comment';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import PublicIcon from '@mui/icons-material/Public';

const Post = forwardRef(({ name, description, message, avatar, time}, ref) => {

  return (
    <div ref = { ref } className='post'>
        <div className="post__header">
            <div className="post__avatar">
                {avatar && <Avatar className='post__avatar__avatar' src={avatar}/>}
                <span></span>
            </div>
            <div className="post__info">
                <div className="post__info__header">
                    <h2>{name}</h2>
                    <span>•</span>
                    <h3>Following</h3>
                </div>
                <div className="post__info__description">
                    <p>{description}</p>
                </div>
                <div className="post__info__time">
                    <h3>{time}</h3>
                    <span>•</span>
                    <PublicIcon className='post__info__time_public' />
                </div>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__bottom">
            <PostOptions Icon={ThumbUpOffAltIcon} title='Like' />
            <PostOptions Icon={CommentIcon} title='Comment' />
            <PostOptions Icon={EventRepeatIcon} title='Repost' />
            <PostOptions Icon={SendIcon} title='Send' />
        </div>
    </div>
  )
})

export default Post