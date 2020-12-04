import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
    <div>
        <textarea></textarea>
        <button>Add post</button>
        <div className={style.posts}>
           <Post message='Hi, how are you?' likeCount='&#9829; 10' />
           <Post message="It's my first post" likeCount='&#9829; 99' />
        </div>
    </div>
    )
}

export default MyPosts