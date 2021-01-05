import React from 'react'
import style from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogsItem'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} image={dialog.image} />)
    let messagesElements = props.state.messages.map(messages => <Message message={messages.message} image={messages.image} />)

    let newMessageElement = React.createRef()

    let sendMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.dialogs__textarea}>
                    <textarea ref={newMessageElement} placeholder='Aa'></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs