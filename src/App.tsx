import React from 'react';
import logo from './logo.svg';
import './App.css';

// 関数でAppというcomponentを定義
function App() {
  // App componentではHTML要素を返す
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// 定義したAppをデフォルトでエクスポートする
export default App;
