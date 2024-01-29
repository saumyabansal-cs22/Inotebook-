import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Switch
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'; // Import the component you want to render for the "/"
import NotesState from './context/notesc/NotesState';

function App() {
  return (
    <>
    <NotesState>

    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
        {/* Add more Route components for other pages */}
      </Routes>
    </Router>
    </NotesState>
    </>
  );
}

export default App;
