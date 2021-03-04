import React from 'react'
import style from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogsItem'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from "redux-form"
import { Textarea } from '../common/FormControl/FormControl'
import { maxLengthCreator, required } from '../../utils/validators/validators'

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} image={dialog.image} />)
    let messagesElements = props.dialogsPage.messages.map(messages => <Message key={messages.id} message={messages.message} image={messages.image} />)
    // let newMessageText = props.dialogsPage.newMessageText

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    /*
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
    */

    // читаємо флаг isAuth, щоб дізнатись чи ми залогінені
    // якщо ні, редірект кидає на ЛОГІН, якщо тру, то отрісовує jsx
    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <AddMessageReduxForm onSubmit={addNewMessage} />
                {/* <div className={style.dialogs__textarea}>
                    <textarea onChange={onMessageChange}
                        // ref={newMessageElement}
                        placeholder='Aa'
                        value={newMessageText} />
                    <button onClick={onSendMessageClick}>Send</button>
                </div> */}
            </div>
        </div>
    )
}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.dialogs__textarea}>
                <Field component={Textarea} validate={[required, maxLength100]} name={'newMessageBody'} placeholder='Aa' />
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)


export default Dialogs