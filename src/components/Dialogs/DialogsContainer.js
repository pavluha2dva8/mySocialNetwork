import React from 'react'
import { connect } from 'react-redux'
import { sendMessageCreator, onMessageChangeCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

/* 
const DialogsContainer = (props) => {

    // let state = props.store.getState().dialogsPage

    // let sendMessage = () => {
    //     props.store.dispatch(sendMessageCreator())
    // }

    // let onMessageChange = (text) => {
    //     props.store.dispatch(onMessageChangeCreator(text))
    // }

    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState().dialogsPage
                let sendMessage = () => {
                    store.dispatch(sendMessageCreator())
                }
                let onMessageChange = (text) => {
                    store.dispatch(onMessageChangeCreator(text))
                }
                return <Dialogs sendMessage={sendMessage}
                    updateNewMessageText={onMessageChange}
                    dialogsPage={state} />
            }
            }
        </StoreContext.Consumer>
    )
}
*/

// було так як зверху
// стало як знизу

// замапить стейт, перетворити частину стейта в props
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch ) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(onMessageChangeCreator(text))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) 
// якщо ми визиваємо ф-ю двічі, це 
// не визов ф-ї один раз, а потім 
// другий, а визов ф-ї, яка повертає нову ф-ю і
// визов ф-ї яку повернула перша ф-я

// в другу ф-ю ми повертаємо нашу презентаційну
// компоненту навколо якої ми хочемо створити
// контейнерну

// Тобто першим визовом, ми якби настраюємо
// нашу презентаційну компоненту

export default DialogsContainer