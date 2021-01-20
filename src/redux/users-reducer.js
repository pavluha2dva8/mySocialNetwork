const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {id: 1, followed: true, photo: 'https://99px.ru/sstorage/1/2018/09/image_12609180803112950164.jpg', fullName: 'Pavl K.', status: 'HelloNewComponent', location: {country: 'Ukraine', city: 'BC'}},
        // {id: 2, followed: true, photo: 'https://99px.ru/sstorage/1/2018/09/image_12609180803112950164.jpg', fullName: 'Valeria S.', status: 'Hi 2 all', location: {country: 'USA', city: 'New York'}},
        // {id: 3, followed: false, photo: 'https://99px.ru/sstorage/1/2018/09/image_12609180803112950164.jpg', fullName: 'Dimich K.', status: 'I\'m ok', location: {country: 'Belarus', city: 'Minsk'}},
        // {id: 4, followed: false, photo: 'https://99px.ru/sstorage/1/2018/09/image_12609180803112950164.jpg', fullName: 'Pavel K.', status: 'lf a job Front end', location: {country: 'Ukraine', city: 'Kyiv'}}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                // users: [...state.users], запис ідентичний до users: state.users.map( u => u)
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        } 
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map ( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            } 
        }
        case SET_USERS: {
            return { ...state, users: [ ...state.users, ...action.users] } // так як юзерів буде не 1, а цілий масив, то до action.users додаємо спред оператор ..., щоб склеїти 2 масива
        }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer