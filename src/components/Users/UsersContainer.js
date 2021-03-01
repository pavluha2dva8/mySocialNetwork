import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, toggleFollowingProgress, getUsers } from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

// класовый компонент ми перенесли з отдельного файла
// в файл з контейнерами
// контейнер конект з mdtp i mstp обертає класовий,
// який в свою чергу обертає презентаційний Users

// class - компонент, який буде робити запроси до серверного API
class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // Раніше компонент визивав стільки кода, щоб відправити запрос
        // і отримати данні
        // this.props.toggleIsFetching(true)

        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     })
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber)

        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

// mapStateToProps - ф-я яка приймає глобально весь стейт і повертає обєкт з
// куском стейта, який буде потрібний компоненту

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
/*
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }

}
*/
// Було так як зверху, а тепер маленький лайф-фак, ми можемо в ф-ю конект
// передати обєкт з екшн кріейторами

export default compose(
    connect(mapStateToProps, 
        { follow, unfollow, toggleFollowingProgress, getUsers }),
    withAuthRedirect
)(UsersContainer)

// let AuthRedirectComponent = withAuthRedirect(UsersContainer)
// export default connect(mapStateToProps, 
//     { follow, unfollow, toggleFollowingProgress, getUsers })(AuthRedirectComponent)