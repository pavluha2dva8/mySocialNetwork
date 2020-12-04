import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
    return <nav className={style.nav}>
    <ul>
        <li className={style.nav__list}><a href="#" className={style.nav__item}>Profile</a></li>
        <li className={style.nav__list}><a href="#" className={style.nav__item}>Messages</a></li>
        <li className={style.nav__list}><a href="#" className={style.nav__item}>News</a></li>
        <li className={style.nav__list}><a href="#" className={style.nav__item}>Music</a></li>
    </ul>
</nav>
}

export default Navbar