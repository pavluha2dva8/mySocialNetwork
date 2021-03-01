import React from 'react'
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

// Тут ми создаємо контейнер RedirectComponent над нашими Component які прийдуть в ХОК
// І ще після цього ми цей контейнер обертаємо connect'ом, щоб не прокидувати в кожній
// компоненті isAuth. Компонент в компоненті компонентом поганяє.

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'} />

            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}
// В нас є НОС withAuthRedirect і вся логіка в одному місці, яку можна гибко настроювати.
// Якщо хочемо захистити якийсь компонент від логіна, то просто обертаємо його withAuthRedirect
// По типу let AuthRedirectComponent = withAuthRedirect(UsersContainer)