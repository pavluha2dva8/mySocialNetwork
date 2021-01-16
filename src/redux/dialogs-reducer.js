const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
    
    const addMessage = () => {
        let newMessage = {
            id: 6,
            message: state.newMessageText,
            image: 'https://i1.sndcdn.com/avatars-000498469299-0h7lzj-t500x500.jpg'
        }
        state.messages.push(newMessage)
        state.newMessageText = ''
    }

    const updateNewMessageText = (newText) => {
        state.newMessageText = newText
    }

    switch (action.type) {
        case ADD_MESSAGE: addMessage()
            break
        case UPDATE_NEW_MESSAGE_TEXT: updateNewMessageText(action.newText)
            break
    }


    return state
}

// actionCreator - type: ...
export const sendMessageCreator = () => ({ type: ADD_MESSAGE })
export const onMessageChangeCreator = (text) => (
    { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
)

export default dialogsReducer
