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

    let postsElements = props.profilePage.posts.map(post => <Post message={post.message} likeCount={post.likeCount} />)
    let newPostText = props.profilePage.newPostText

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.onPostChange(text)
    }

    return (
        <div>
            <h3>Posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                    placeholder="What's on your mind?"
                    value={newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}>Post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts