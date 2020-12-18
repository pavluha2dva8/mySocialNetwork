import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div>
            <NavLink to={path} className={style.dialogsItem} activeClassName={style.active}>{props.name}</NavLink>
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

    let dialogsData = [
        { id: '01', name: 'Pavl' },
        { id: '02', name: 'Valeria' },
        { id: '03', name: 'Dimich' },
        { id: '04', name: 'Someone' },
        { id: '05', name: 'Pink Panther' }
    ]

    let messagesData = [
        { id: '01', message: 'Hi' },
        { id: '02', message: 'H0i' },
        { id: '03', message: 'HiHo' },
        { id: '04', message: 'HiHi' },
        { id: '05', message: 'HiHo HiHiHo' }
    ]
    /*
        let dialogsElements = [
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
            <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        ]
    */
    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = messagesData.map(messages => <Message message={messages.message} />)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs