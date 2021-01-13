import React from 'react'
import style from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogsItem'

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} image={dialog.image} />)
    let messagesElements = props.dialogsPage.messages.map(messages => <Message message={messages.message} image={messages.image} />)

    let newMessageElement = React.createRef()

    let sendMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE' })
        // props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        let action = { type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text }
        props.dispatch(action)
        // props.updateNewMessageText(text)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.dialogs__textarea}>
                    <textarea onChange={onMessageChange} ref={newMessageElement}
                        placeholder='Aa'
                        value={props.dialogsPage.newMessageText} />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs