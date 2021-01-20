import { connect } from 'react-redux'
import Users from "./Users"
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer'

// mapStateToProps - ф-я яка приймає глобально весь стейт і повертає обєкт з
// куском стейта, який буде потрібний компоненту

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId))
        },
        unfollow: (usersId) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (usersId) => {
            dispatch(setUsersAC(usersId))
        }
    }

}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer