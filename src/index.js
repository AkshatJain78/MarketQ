import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from'./Main';
import Main2 from'./Main2';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const main = ReactDOM.createRoot(document.getElementById('main'))
main.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
const main2 = ReactDOM.createRoot(document.getElementById('main2'))
main2.render(
  <React.StrictMode>
    <Main2 />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
