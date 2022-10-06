import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; //App.jsからApp関数を取り込み
// import Hello from './components/Hello'
// import Name from './components/Name'
import Message from './components/Message'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  // index.htmlにあるrootをIDにもつ要素を指定
  document.getElementById('root') as HTMLElement
);
root.render(
  // 描画するJSXタグを指定
  <React.StrictMode>
    {/* Appはsrc/App.tsxからimportしたものを使用する */}
    {/* <App /> */}
    {/* <Hello /> */}
    {/* <Name /> */}
    <Message />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
