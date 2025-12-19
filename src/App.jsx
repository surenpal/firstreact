import React from "react";
import "./App.css";
import Card from "./components/card.jsx";
import Navbar from "./components/navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Welcome to Home Page</h1>
    <Card name="Surendra" age={25} />
    <Card name="Dhiren" age={30} />
    <Card name="Bhiren" age={35} />
  </div>
);

const About = () => <h1>About Us</h1>;
const Services = () => <h1>Our Services</h1>;
const Contact = () => <h1>Contact Us</h1>;

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;