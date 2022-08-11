import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const name ="sanam";
const currDate = new Date().toLocaleDateString();
const currTime =new Date().toLocaleTimeString();
// ReactDOM.render(
//   <>
//   <h1>hello,my name is{name}</h1>,
//   <p>currDate is={currDate}</p>
//   <p>currTime is={currTime}</p>
//   </>,
//   document.getElementById("root")
  

// )
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <h1>hello,my name is {name}</h1>,
  <p>currDate is={currDate}</p>
  <p>currTime is={currTime}</p>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
