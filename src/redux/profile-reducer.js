const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

// одноразовий обєкт для стартової ініціалізації
// якщо в profileReducer не прийде state
// по умолчанію він буде (state = initialState, action)
let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: '\u2661 10' },
        { id: 2, message: "It's my first post", likeCount: '\u2661 99' }
    ],
    newPostText: 'pavluha_bc'
}

const profileReducer = (state = initialState, action) => {
    // let stateCopy = { ...state }
    // stateCopy.posts = [...state.posts]
    // тут ми создали копію стейта і масива,
    //  а потім запушили туда нові значення
    // Щоб connect зрівняв старий стейт з Copy'єю
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: '\u2661 0'
            }

            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state }
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

// actionCreator - type: ...
export const addPostCreator = () => ({ type: ADD_POST })
export const updateNewPostTextCreator = (text) => (
    { type: UPDATE_NEW_POST_TEXT, newText: text }
)

export default profileReducer