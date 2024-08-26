import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 12 },
  { id: 2, message: "It`s my first post", likesCount: 10},
]
let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Yo" },
  { id: 3, message: "Hi! Yo" },
  { id: 4, message: "Hi! Yo" },
  { id: 5, message: "Hi! Yo" },
  { id: 6, message: "Hi! Yo" }
]

let dialogsData = [
  { id: 1, name: "Sergey" },
  { id: 2, name: "Dimych" },
  { id: 3, name: "Marina" },
  { id: 4, name: "Artyom" },
  { id: 5, name: "Ilya" },
  { id: 6, name: "Vlad" }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts = {posts} dialogsData = {dialogsData} messages = {messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
