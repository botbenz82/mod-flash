import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import EditorPage from './pages/EditorPage';

const App = () => {
  return (
    <Router>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/editor">Editor</Link></li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
