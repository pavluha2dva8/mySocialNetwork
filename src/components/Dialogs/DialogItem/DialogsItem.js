import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './../Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div>
            <NavLink to={path} className={style.dialogsItem} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem