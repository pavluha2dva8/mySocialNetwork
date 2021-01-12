import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { subscribe } from './redux/state'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from './redux/state'


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

subscribe(rerenderEntireTree)

rerenderEntireTree(state)

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
