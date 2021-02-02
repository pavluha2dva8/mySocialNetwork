const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

// одноразовий обєкт для стартової ініціалізації
// якщо в dialogsReducer не прийде state
// по умолчанію він буде (state = initialState, action)
let initialState = {
    dialogs: [
        { id: 1, name: 'Pavl', image: 'https://i.pinimg.com/originals/de/a2/12/dea212864ca4463b67cd5687a3dc1a8d.jpg' },
        { id: 2, name: 'Valeria', image: 'https://i.pinimg.com/originals/de/a2/12/dea212864ca4463b67cd5687a3dc1a8d.jpg' },
        { id: 3, name: 'Dimich', image: 'https://i.pinimg.com/originals/de/a2/12/dea212864ca4463b67cd5687a3dc1a8d.jpg' },
        { id: 4, name: 'Someone', image: 'https://i.pinimg.com/originals/de/a2/12/dea212864ca4463b67cd5687a3dc1a8d.jpg' },
        { id: 5, name: 'Pink Panther', image: 'https://i.pinimg.com/originals/de/a2/12/dea212864ca4463b67cd5687a3dc1a8d.jpg' }
    ],
    messages: [
        { id: 1, message: 'Hi', image: 'https://i.pinimg.com/originals/de/a2/12/dea212864ca4463b67cd5687a3dc1a8d.jpg' },
        { id: 2, message: 'H0i', image: 'https://i.pinimg.com/originals/de/a2/12/dea212864ca4463b67cd5687a3dc1a8d.jpg' },
        { id: 3, message: 'HiHo', image: 'https://i.pinimg.com/originals/de/a2/12/dea212864ca4463b67cd5687a3dc1a8d.jpg' },
        { id: 4, message: 'HiHi', image: 'https://i.pinimg.com/originals/de/a2/12/dea212864ca4463b67cd5687a3dc1a8d.jpg' },
        { id: 5, message: 'HiHo HiHiHo', image: 'https://i.pinimg.com/originals/de/a2/12/dea212864ca4463b67cd5687a3dc1a8d.jpg' }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {


    // let stateCopy тепер ця змінна не потрібна, в кейсах ми повертаємо
    // новий обєкт відразу
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newMessageText,
                image: 'https://i.pinimg.com/originals/de/a2/12/dea212864ca4463b67cd5687a3dc1a8d.jpg'
            }
            return {
                ...state,
                messages: [...state.messages, newMessage], // создаєм новий масив, зліва закидуємо старі елементи, а справа добавляємо новий
                newMessageText: ''
            }
            // stateCopy.messages = [...state.messages] можемо переписать як зверху

            // stateCopy.messages.push(newMessage) зараз метод push майже не використовується
            // тому ми просто копіюємо значення масив і в кінець добавляємо нове значення
            // messages: [...state.messages, newMessage]

            // stateCopy.newMessageText = ''

        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
            // stateCopy.newMessageText = action.newText замість такого запису
            // тепер просто переписуємо як зверху.
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
