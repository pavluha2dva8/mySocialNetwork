/* 
let rerenderEntireTree = () => {
    console.log('state changed')
}
*/

// actionCreator - type: ...
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likeCount: '\u2661 10' },
                { id: 2, message: "It's my first post", likeCount: '\u2661 99' }
            ],
            newPostText: 'pavluha_bc'
        },
        dialogsPage: {
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
        },
        sideBar: {
            friends: [
                { id: '001', name: 'Pavl', image: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png' },
                { id: '002', name: 'Valeria', image: 'https://archilab.online/images/1/123.jpg' },
                { id: '003', name: 'Dimon', image: 'https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg' }
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer  // PATTERN observer (наблюдатель) // похож на publisher - subscriber
    },

    // Методи, які змінюють наш state

    _addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likeCount: '\u2661 0'
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    _addMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText,
            image: 'https://i1.sndcdn.com/avatars-000498469299-0h7lzj-t500x500.jpg'
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)

    },
    _updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber(this._state)
    },
    dispatch(action) { // action - це обєкт { type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text }
        switch (action.type) {
            case 'ADD-POST': this._addPost()
                break
            case 'UPDATE-NEW-POST-TEXT': this._updateNewPostText(action.newText)
                break
            case 'ADD-MESSAGE': this._addMessage()
                break
            case 'UPDATE-NEW-MESSAGE-TEXT': this._updateNewMessageText(action.newText)
                break
        }
    }
}

export const addPostCreator = () => ({ type: ADD_POST })

export const updateNewPostTextCreator = (text) => (
    { type: UPDATE_NEW_POST_TEXT, newText: text }
    )

export const sendMessageCreator = () => ({ type: ADD_MESSAGE })

export const onMessageChangeCreator = (text) => (
    { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
    )

window.store = store
export default store

/*

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likeCount: '\u2661 10' },
            { id: 2, message: "It's my first post", likeCount: '\u2661 99' }
        ],
        newPostText: 'pavluha_bc'
    },
    dialogsPage: {
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
        newMessageText: 'hello message'
    },
    sideBar: {
        friends: [
            { id: '001', name: 'Pavl', image: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png' },
            { id: '002', name: 'Valeria', image: 'https://archilab.online/images/1/123.jpg' },
            { id: '003', name: 'Dimon', image: 'https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg' }
        ]
    }


}

*/

/*

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likeCount: '\u2661 0'
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
        image: 'https://i1.sndcdn.com/avatars-000498469299-0h7lzj-t500x500.jpg'
    }

    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)

}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer  // PATTERN observer (наблюдатель) // похож на publisher - subscriber
}

*/

