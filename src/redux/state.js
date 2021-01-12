let rerenderEntireTree = () => {
    console.log('state changed')
}

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

window.state = state

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



export default state