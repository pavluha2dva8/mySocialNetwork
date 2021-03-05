import { applyMiddleware, combineReducers, createStore } from 'redux'
import authReducer from './auth-reducer'
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from './users-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer'

// комбайним reducer'и
let reducers = combineReducers({
    profilePage: profileReducer, // у стейта є свойство profilePage, і за ньго відповідає profileReducer
    dialogsPage: dialogsReducer, // є свойство dialogsPage, і за ньго відповідає dialogsReducer
    sidebar: sidebarReducer, // є свойство sidebar, і за ньго відповідає sidebarReducer ітд...
    usersPage: usersReducer,
    auth: authReducer, // відповідає за аутентифікацію
    form: formReducer,
    app: appReducer
})
// після того як закомбайнили reducer'и,
// ми просто передаємо їх store'у

// автоматично store создає стейт, в якому є
// 3 таких свойства profilePage: profileReducer, dialogsPage: dialogsReducer ітд...
let store = createStore(reducers, applyMiddleware(thunkMiddleware))
// applyMiddleware - прослойка в конвеєрі, для того щоб внедряти
// свої проміжні ПО. В данному випадку для того, щоб діспатчить санки
window.store = store

export default store