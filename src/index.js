import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter } from 'react-router-dom';
//app.js 파일을 index.js파일이 포함하고 있으므로 , BrowserRouter는 index.js파일이 한번만명시

const root = ReactDOM.createRoot(document.getElementById('root'));
{/* StrictMode는 rendering twice for detecting problem */ }
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
