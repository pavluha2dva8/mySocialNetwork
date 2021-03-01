import React from 'react'
import { connect } from 'react-redux'
import { sendMessageCreator, onMessageChangeCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

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
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(onMessageChangeCreator(text))
        }
    }
}
// ===================================================== //

// connect - бере mstp і mdtp, робе з нього ХОК і визиває його на компоненті, який ми передали.
export default compose(
    connect(mapStateToProps, mapDispatchToProps), // #2
    withAuthRedirect // #1
)(Dialogs)
// Смисл compose - візьми Dialogs і закинт його в ф-ю withAuthRedirect,
// візьми результат тієї ф-ї і зактнь його в connect(mapStateToProps, mapDispatchToProps),
// В compose ми йдемо ЗНИЗУ ВВЕРХ!DialogsContainer

// ===================================================== //
// Було як знизу, а тепер ми все засунули в ф-ю compose !!!
// ===================================================== //

/*
// НОС - розписано в ProfileContainer
// HOC - принято називати з приставкою with, типу вони надають щось
// зАутентифікаційнимРедіректом
-----------let AuthRedirectComponent = withAuthRedirect(Dialogs)

-----------const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
// якщо ми визиваємо ф-ю двічі, це 
// не визов ф-ї один раз, а потім 
// другий, а визов ф-ї, яка повертає нову ф-ю і
// визов ф-ї яку повернула перша ф-я

// в другу ф-ю ми повертаємо нашу презентаційну
// компоненту навколо якої ми хочемо створити
// контейнерну

// Тобто першим визовом, ми якби настраюємо
// нашу презентаційну компоненту
*/