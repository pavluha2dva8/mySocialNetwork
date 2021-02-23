const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

// одноразовий обєкт для стартової ініціалізації
// якщо в profileReducer не прийде state
// по умолчанію він буде (state = initialState, action)
let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: '\u2661 10' },
        { id: 2, message: "It's my first post", likeCount: '\u2661 99' }
    ],
    newPostText: 'What\'s on your mind?',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    // let stateCopy = { ...state }
    // stateCopy.posts = [...state.posts]
    // тут ми создали копію стейта і масива,
    //  а потім запушили туда нові значення
    // Щоб connect зрівняв старий стейт з Copy'єю

    // stateCopy замінили просто return {}
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: '\u2661 0'
            }
            return { 
                ...state,
                posts: [ ...state.posts, newPost],
                newPostText: ''
             }
        }
        case UPDATE_NEW_POST_TEXT: {
            return { 
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state
    }
}

// actionCreator - type: ...
export const addPostCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const updateNewPostTextCreator = (text) => (
    { type: UPDATE_NEW_POST_TEXT, newText: text }
)

export default profileReducer