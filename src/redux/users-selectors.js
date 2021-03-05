import { createSelector } from 'reselect'
// Селектор - ф-я, яка приймає весь стейт, достає з нього
// те, що потрібно і повертає ті данні 

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}


// reselect
const getUsersSelector = (state) => {
    return state.usersPage.users
}
// Першим параметром в createSelector передаємо ф-ю getUsers, щоб
// отримати юзерів, з якими будемо щось робити, а другим парам.
// іде ф-я, в яку закинуться юзери
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter( u => true ) // fake test filter
})
// Перед тим як запускати ф-ю, бібліотека reselect, подивиться, від яких
// параметрів вона залежить, чи є щось в памяті вже створене, чи не зміеились залежності
// і тільки потім якщо потрібно запусте ф-ю і видасть результат
// Якщо в стейті буде щось змінюватись, а не наші залежності users, 
// то ф-я не буде запускатись