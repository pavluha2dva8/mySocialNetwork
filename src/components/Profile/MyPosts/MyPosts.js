import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    /*
    let postsData = [
        { id: 1, message: 'Hi, how are you?', likeCount: '\u2661 10' },
        { id: 2, message: "It's my first post", likeCount: '\u2661 99' }
    ]
    */

    let newPostElement = React.createRef()
    
    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    let postsElements = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount} />)

    return (
        <div>
            <h3>Posts</h3>
            <div>
                <textarea ref={newPostElement} placeholder="What's on your mind?"></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts