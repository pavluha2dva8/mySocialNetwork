import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount} />)

    return (
        <div>
            <h3>Posts</h3>
            <div>
                <textarea placeholder="What's on your mind?"></textarea>
            </div>
            <div>
                <button>Post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts