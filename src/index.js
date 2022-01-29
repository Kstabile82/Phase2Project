import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App";
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { render } from 'react-dom';
// import { transitions, positions, Provider as AlertProvider } from 'react-alert';
// import AlertTemplate from 'react-alert-template-basic'

// const Root = () => (
//   <AlertProvider template={AlertTemplate} >
//     <App />
//   </AlertProvider>
// )
// render(<Root />, document.getElementById('root'))
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));
