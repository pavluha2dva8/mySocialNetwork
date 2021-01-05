import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './FriendsItem.module.css'

const FriendsItem = (props) => {
    return (
        <div>
            <NavLink className={style.friend} to={props.id}>
                <img className={style.itemFriends_image} src={props.image} />
                {props.name}
            </NavLink>
        </div>
    )
}

export default FriendsItem