import * as React from 'react';
import {Routes, Route, Link, Navigate} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/hello">Hello</Link></p>
      <p><Link to="/hi">Hi</Link></p>
    </div>
  );
};

const Hello = () => {
  return (
    <div>
      <h2>Hello</h2>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/hello">Hello</Link></p>
      <p><Link to="/hi">Hi</Link></p>
    </div>
  );
};

class App extends React.Component<{}, {}> {
  render() {
    return (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/hello" element={<Hello/>} />
          <Route path="*" element={<Navigate to="/"></Navigate>} />
        </Routes>
    );
  }
}

export default App;