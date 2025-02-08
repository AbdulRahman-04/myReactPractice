import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
