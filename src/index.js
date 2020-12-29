import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    { id: 1, message: 'Hi, how are you?', likeCount: '\u2661 10' },
    { id: 2, message: "It's my first post", likeCount: '\u2661 99' }
]

let dialogsData = [
    { id: '01', name: 'Pavl' },
    { id: '02', name: 'Valeria' },
    { id: '03', name: 'Dimich' },
    { id: '04', name: 'Someone' },
    { id: '05', name: 'Pink Panther' }
]

let messagesData = [
    { id: '01', message: 'Hi' },
    { id: '02', message: 'H0i' },
    { id: '03', message: 'HiHo' },
    { id: '04', message: 'HiHi' },
    { id: '05', message: 'HiHo HiHiHo' }
]

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
