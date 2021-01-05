import React from 'react'
import style from './../Dialogs.module.css'


const Message = (props) => {
    return (
        <div className={style.message}>
            <img className={style.messageImage} src={props.image} alt='' />
            <span className={style.messageItem}>{props.message}</span>
        </div>
    )
}

export default Message