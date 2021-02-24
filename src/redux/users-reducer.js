const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

let initialState = {
    users: [
        // {id: 1, followed: true, photo: 'https://99px.ru/sstorage/1/2018/09/image_12609180803112950164.jpg', fullName: 'Pavl K.', status: 'HelloNewComponent', location: {country: 'Ukraine', city: 'BC'}},
        // {id: 2, followed: true, photo: 'https://99px.ru/sstorage/1/2018/09/image_12609180803112950164.jpg', fullName: 'Valeria S.', status: 'Hi 2 all', location: {country: 'USA', city: 'New York'}},
        // {id: 3, followed: false, photo: 'https://99px.ru/sstorage/1/2018/09/image_12609180803112950164.jpg', fullName: 'Dimich K.', status: 'I\'m ok', location: {country: 'Belarus', city: 'Minsk'}},
        // {id: 4, followed: false, photo: 'https://99px.ru/sstorage/1/2018/09/image_12609180803112950164.jpg', fullName: 'Pavel K.', status: 'lf a job Front end', location: {country: 'Ukraine', city: 'Kyiv'}}
    ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                // users: [...state.users], запис ідентичний до users: state.users.map( u => u)
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users } // так як юзерів буде не 1, а цілий масив, то до action.users додаємо спред оператор ..., щоб склеїти 2 масива
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage } // так як юзерів буде не 1, а цілий масив, то до action.users додаємо спред оператор ..., щоб склеїти 2 масива
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count } // так як юзерів буде не 1, а цілий масив, то до action.users додаємо спред оператор ..., щоб склеїти 2 масива
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId ]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId })

export default usersReducer