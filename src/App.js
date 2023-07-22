// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import Home from './Home';
import Services from './Services';
import Coaches from './Coaches';
import Fields from './Fields';
import Booking from './Booking';

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/fields" element={<Fields />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
