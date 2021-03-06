import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

// В другому визові вставляємо цільовий компонент, з якого починається двіжуха
// Обработчики чіпляємо знизу вверх
export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }), // #3
    withRouter, // #2
    withAuthRedirect // #1
)(ProfileContainer)

// ===================================================== //
// Було як знизу, а тепер ми все засунули в ф-ю compose !!!
// ===================================================== //

/*
// HOC - ми просто визиваємо ф-ю WithAuthRedirect і передаємо їй компонент,
// а вона в свою чергу внутрі создає компонент класовий, або ф-ональний, і
// повертається до нас наружу
// Тепер ми не дублюємо логіку, а можемо просто визвати НОС з потрібним параметром (компонентом)
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)



let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent)
*/
