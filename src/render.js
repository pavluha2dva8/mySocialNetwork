import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { addPost, updateNewPostText } from './redux/state'


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
            </BrowserRouter>, document.getElementById('root')
    );
}

reportWebVitals();
