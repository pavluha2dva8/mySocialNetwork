import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li className={style.nav__list}>
                    <NavLink to="/profile" className={style.nav__item} activeClassName={style.nav__item_active}>Profile</NavLink>
                </li>
                <li className={style.nav__list}>
                    <NavLink to="/dialogs" className={style.nav__item} activeClassName={style.nav__item_active}>Messages</NavLink>
                </li>
                <li className={style.nav__list}>
                    <NavLink to="/news" className={style.nav__item} activeClassName={style.nav__item_active}>News</NavLink>
                </li>
                <li className={style.nav__list}>
                    <NavLink to="/music" className={style.nav__item} activeClassName={style.nav__item_active}>Music</NavLink>
                </li>
                <li className={style.nav__list}>
                    <NavLink to="/settings" className={style.nav__item} activeClassName={style.nav__item_active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar