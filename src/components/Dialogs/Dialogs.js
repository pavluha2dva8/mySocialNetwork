import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={style.dialogsItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>
                    {props.message}
                </div>
    )
}

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                <DialogItem name='Pavl' id='id0001' />
                <DialogItem name='Valeria' id='id0002' />
                <DialogItem name='Dimich' id='id0003' />
                <DialogItem name='Someone' id='id0004' />
                <DialogItem name='Pink Panther' id='id0005' />
                
            </div>
            <div className={style.messages}>
                <Message message='Hi' />
                <Message message='H0i' />
                <Message message='HiHo' />
                <Message message='HiHi' />
            </div>
        </div>
    )
}

export default Dialogs