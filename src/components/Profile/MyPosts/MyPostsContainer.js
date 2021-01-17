import React from 'react'
import MyPosts from './MyPosts'
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer'

const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostCreator())
        // props.addPost()
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextCreator(text))
        // props.updateNewPostText(text)
    }

    return (
        <MyPosts addPost={addPost} updateNewPostText={onPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText} />
    )
}

export default MyPostsContainer