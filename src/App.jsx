import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import GamePage from './Pages/GamePage';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease', once: false });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Header />
            <About />
            <Projects />
            <Footer />
          </div>
        } />
        <Route path="/game" element={
          <div>
            <Header />
            <GamePage />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;