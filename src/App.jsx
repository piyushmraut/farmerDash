import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Dashboard from './pages/Dashboard.jsx';
import TrainingSession from './components/TrainingSession.jsx';
import Ecommerce from './components/Ecommerce.jsx';
import Guidebook from './components/Guidebook.jsx';
import Community from './components/Community.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/training" element={<TrainingSession />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/guidebook" element={<Guidebook />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
