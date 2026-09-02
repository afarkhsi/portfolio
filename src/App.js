import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SocialMedias from './components/SocialMedias/SocialMedias';
import HomePage from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contacts';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <SocialMedias />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/mesprojets" element={<Projects />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
