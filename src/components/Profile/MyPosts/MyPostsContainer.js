import React from 'react'
import MyPosts from './MyPosts'
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer'
import StoreContext from '../../../StoreContext'

const MyPostsContainer = () => {

    // let state = props.store.getState()

    // let addPost = () => {
    //     props.store.dispatch(addPostCreator())
    //     // props.addPost()
    // }

    // let onPostChange = (text) => {
    //     props.store.dispatch(updateNewPostTextCreator(text))
    //     // props.updateNewPostText(text)
    // }

    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostCreator())
                }
                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextCreator(text))
                }

                return <MyPosts addPost={addPost} updateNewPostText={onPostChange}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText} />
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer