import {combineReducers, createStore} from 'redux'
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

// комбайним reducer'и
let reducers = combineReducers({
    profilePage: profileReducer, // у стейта є свойство profilePage, і за ньго відповідає profileReducer
    dialogsPage: dialogsReducer, // є свойство dialogsPage, і за ньго відповідає dialogsReducer
    sidebar: sidebarReducer // є свойство sidebar, і за ньго відповідає sidebarReducer ітд...
})
// після того як закомбайнили reducer'и,
// ми просто передаємо їх store'у

// автоматично store создає стейт, в якому є
// 3 таких свойства profilePage: profileReducer, dialogsPage: dialogsReducer ітд...
let store = createStore(reducers)

export default store