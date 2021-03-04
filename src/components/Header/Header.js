import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

const Header = (props) => {
    return <header className={style.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Steam_Logo.png' alt='' />

        <div className={style.login}>
            {props.isAuth
                ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header