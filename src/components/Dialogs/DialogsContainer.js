import React from 'react'
import { sendMessageCreator, onMessageChangeCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeCreator(text))
    }

    return (
        <Dialogs sendMessage={sendMessage}
            updateNewMessageText={onMessageChange}
            dialogsPage={state} />
    )
}

export default DialogsContainer