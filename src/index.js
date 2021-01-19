import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux'
// import { addMessage, addPost, updateNewMessageText, updateNewPostText } from './redux/state'

// також убираємо цю отрісовку, бо ми робимо її
// тепер 1 раз, а потім connect буде робить
// перерісовку локально
// let rerenderEntireTree = ( ) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                // state={state}
                // store={store}
                // dispatch={store.dispatch.bind(store)}
                // addPost={store.addPost.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}
                // addMessage={store.addMessage.bind(store)}
                // updateNewMessageText={store.updateNewMessageText.bind(store)}
                />
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
//}

// rerenderEntireTree(/* store.getState() */)

/* 
ми убрали перерісовку всього дерева,
бо connect робить її внутрі локально для кожного компонента
store.subscribe(() => {
    //let state = store.getState()
    rerenderEntireTree( *state* )
})
*/
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
