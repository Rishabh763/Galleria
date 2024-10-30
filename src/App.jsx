import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import NoPage from "./components/Nopage";
import Slides from "./components/Slides";

import ScrollToTop from "./components/ScrollToTop";


function App() {
  
  return (

    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:photographer" element={<Slides />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
