// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage'; 
import AboutPage from './components/Aboutpage';
import MenuPage from './components/Menupage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
