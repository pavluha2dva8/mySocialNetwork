import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                <div className={style.dialogsItem}>
                    <NavLink to='/dialogs/pavl'>Pavl</NavLink>
                </div>
                <div className={style.dialogsItem}>
                    <NavLink to='/dialogs/valeria'>Valeria</NavLink>
                </div>
                <div className={style.dialogsItem}>
                    <NavLink to='/dialogs/dimich'>Dimich</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>
                    Hi
                </div>
                <div className={style.message}>
                    Hello
                </div>
                <div className={style.message}>
                    Holla
                </div>
            </div>
        </div>
    )
}

export default Dialogs