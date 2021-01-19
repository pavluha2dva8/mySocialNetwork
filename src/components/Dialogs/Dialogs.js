import React from 'react'
import style from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogsItem'

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} image={dialog.image} />)
    let messagesElements = props.dialogsPage.messages.map(messages => <Message key={messages.id} message={messages.message} image={messages.image} />)
    let newMessageText = props.dialogsPage.newMessageText


    // let newMessageElement = React.createRef()

    let onSendMessageClick = () => {
        // props.dispatch(sendMessageCreator())
        props.sendMessage()
    }

    let onMessageChange = (event) => {
        // let text = newMessageElement.current.value
        let text = event.target.value // value можна получить так, або так як зверху
        // або в MyPosts за допомогою React.createRef()
        // props.dispatch(onMessageChangeCreator(text))
        props.updateNewMessageText(text)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.dialogs__textarea}>
                    <textarea onChange={onMessageChange}
                        // ref={newMessageElement}
                        placeholder='Aa'
                        value={newMessageText} />
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs