const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {

    const addPost = () => {
        let newPost = {
            id: 3,
            message: state.newPostText,
            likeCount: '\u2661 0'
        }
        state.posts.push(newPost)
        state.newPostText = ''
    }

    const updateNewPostText = (newText) => {
        state.newPostText = newText
    }

    switch (action.type) {
        case ADD_POST: addPost()
            break
        case UPDATE_NEW_POST_TEXT: updateNewPostText(action.newText)
            break
    }


    return state
}

// actionCreator - type: ...
export const addPostCreator = () => ({ type: ADD_POST })
export const updateNewPostTextCreator = (text) => (
    { type: UPDATE_NEW_POST_TEXT, newText: text }
)

export default profileReducer