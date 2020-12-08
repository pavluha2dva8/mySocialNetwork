import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
    return <nav className={style.nav}>
    <ul>
        <li className={style.nav__list}> <a href="/profile" className={style.nav__item}>Profile</a></li>
        <li className={style.nav__list}> <a href="/dialogs" className={style.nav__item}>Messages</a></li>
        <li className={style.nav__list}> <a href="/news" className={style.nav__item}>News</a></li>
        <li className={style.nav__list}> <a href="/music" className={style.nav__item}>Music</a></li>
        <li className={style.nav__list}> <a href="/settings" className={style.nav__item}>Settings</a></li>
    </ul>
</nav>
}

export default Navbar