import React, { Children } from 'react';

function App({...props}) {
  return (
    <div className="App">
      <header className="App-header">
      <img src="/logo.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        {/* server.ts에서 전달 받은 child 그리기 */}
        {props.children}
      </header>
    </div>
  );
}

export default App;
