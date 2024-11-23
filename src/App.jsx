import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";  
import About from "./Pages/About";  
import Education from "./Pages/Education"; 
import Hobbies from "./Pages/Hobbies"; 
import Contact from "./Pages/Contact";  
import NavButtons from "./components/NavButtons"; 

function App() {
  return (
    <Router>
      <NavButtons /> {/* Navigation Buttons Component */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Hobbies" element={<Hobbies />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
