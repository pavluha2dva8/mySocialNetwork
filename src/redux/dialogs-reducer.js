const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

// одноразовий обєкт для стартової ініціалізації
// якщо в dialogsReducer не прийде state
// по умолчанію він буде (state = initialState, action)
let initialState = {
    dialogs: [
        { id: 1, name: 'Pavl', image: 'https://i1.sndcdn.com/avatars-000498469299-0h7lzj-t500x500.jpg' },
        { id: 2, name: 'Valeria', image: 'https://i1.sndcdn.com/avatars-000498469299-0h7lzj-t500x500.jpg' },
        { id: 3, name: 'Dimich', image: 'https://i1.sndcdn.com/avatars-000498469299-0h7lzj-t500x500.jpg' },
        { id: 4, name: 'Someone', image: 'https://i1.sndcdn.com/avatars-000498469299-0h7lzj-t500x500.jpg' },
        { id: 5, name: 'Pink Panther', image: 'https://i1.sndcdn.com/avatars-000498469299-0h7lzj-t500x500.jpg' }
    ],
    messages: [
        { id: 1, message: 'Hi', image: 'https://i1.sndcdn.com/avatars-000498469299-0h7lzj-t500x500.jpg' },
        { id: 2, message: 'H0i', image: 'https://i1.sndcdn.com/avatars-000498469299-0h7lzj-t500x500.jpg' },
        { id: 3, message: 'HiHo', image: 'https://i1.sndcdn.com/avatars-000498469299-0h7lzj-t500x500.jpg' },
        { id: 4, message: 'HiHi', image: 'https://i1.sndcdn.com/avatars-000498469299-0h7lzj-t500x500.jpg' },
        { id: 5, message: 'HiHo HiHiHo', image: 'https://i1.sndcdn.com/avatars-000498469299-0h7lzj-t500x500.jpg' }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {
        case ADD_MESSAGE: {
            let stateCopy = { ...state }
            stateCopy.messages = [...state.messages]

            let newMessage = {
                id: 6,
                message: state.newMessageText,
                image: 'https://i1.sndcdn.com/avatars-000498469299-0h7lzj-t500x500.jpg'
            }
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = { ...state }

            stateCopy.newMessageText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

// actionCreator - type: ...
export const sendMessageCreator = () => ({ type: ADD_MESSAGE })
export const onMessageChangeCreator = (text) => (
    { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
)

export default dialogsReducer
