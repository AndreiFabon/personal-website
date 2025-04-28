import React from "react";
import { BrowserRouter, Routes, Route } from
'react-router-dom';
import Home from './pages/Home';
import Twitch from './pages/Twitch';
import About from './pages/About';

export default function App() {
    return (
      <div>
        <div>Layout</div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Twitch />} />
            <Route path="/" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }