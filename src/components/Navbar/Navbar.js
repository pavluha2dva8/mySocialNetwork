import React from 'react'
import { NavLink } from 'react-router-dom'
import FriendsItem from './FriendsItem/FriendsItem'
import style from './Navbar.module.css'

const Navbar = (props) => {

    let friendsElements = props.sideBar.friends.map(friends => <FriendsItem id={friends.id} name={friends.name} image={friends.image} />)

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
                <li className={`${style.nav__list} ${style.nav__listFriends}`}>
                    <NavLink to="/friends" className={`${style.nav__item} ${style.nav__itemFriends}`} activeClassName={style.nav__item_active}>Friends</NavLink>
                </li>
            </ul>
            <div className={style.nav__Friends}>
                {friendsElements}
            </div>
        </nav>
    )
}

export default Navbar