// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Assuming you have a Home component
import About from './pages/About'; // Assuming you have an About component
import Contact from './pages/Contact';
import Works from './pages/Works';
import Layout from './layout';

function App() {
 return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}
      </Routes>
      </Layout>
    </Router>
 );
}

export default App
