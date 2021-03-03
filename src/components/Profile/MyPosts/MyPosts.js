import React from 'react'
import { Field, reduxForm } from 'redux-form'
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

    let onAddNewPost = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={style.posts_container}>
            <h3>Posts</h3>
            <AddPostReduxForm onSubmit={onAddNewPost} />
            {/* <div className={style.post_input}>
                <textarea onChange={onPostChange} ref={newPostElement}
                    placeholder="What's on your mind?"
                    value={newPostText} />
                <button onClick={onAddPost}>Post</button>
            </div> */}
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.post_input}>
                <Field component={'textarea'} name={'newPostBody'} placeholder={'What\'s on your mind?'} />
                <button>Post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm)

export default MyPosts