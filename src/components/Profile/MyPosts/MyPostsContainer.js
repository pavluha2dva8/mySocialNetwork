import { connect } from 'react-redux'
import MyPosts from './MyPosts'
import { addPostCreator } from '../../../redux/profile-reducer'

/* 
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

*/

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
        // posts: state.profilePage.posts,
        // newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => {
            dispatch(addPostCreator(newPostBody))
        }
        // onPostChange: (text) => {
        //     let action = updateNewPostTextCreator(text)
        //     dispatch(action)
        //     // частіше пишуть в одну строку, бо так коротше,
        //     // але тут показано, що ми діспатчим просто 
        //     //action, a action - це просто об'єкт
        // }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer