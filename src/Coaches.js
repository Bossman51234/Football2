import React from 'react';
import { Link } from 'react-router-dom';
import './Coaches.css';
import coach1 from './images/coach1.jpg';
import coach2 from './images/coach2.jpg';
import coach3 from './images/coach3.jpg';
import coach4 from './images/coach4.jpg';

const Coaches = () => {
  return (
    <div className="container">
      <div>
      <div className="header">
  <div className="nav">
    <div className="nav-buttons-left">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
    </div>
    <h1 className="title">Football Sensations</h1>
    <div className="nav-buttons-right">
      <Link to="/fields">Fields</Link>
      <Link to="/coaches">Coaches</Link>
    </div>
    <div className="book-now-box">
      <Link to="/booking" className="book-now-button">Book Now</Link>
    </div>
  </div>
</div>
      </div>
      <div className="coaches-container">
        <div className="coach-row">
          <div className="coach">
            <img src={coach1} alt="Coach 1" />
            <h3>Jean-Luc Smith</h3>
          </div>
          <div className="coach">
            <img src={coach2} alt="Coach 2" />
            <h3>Heisenberg Heisenberg</h3>
          </div>
        </div>
        <div className="coach-row">
          <div className="coach">
            <img src={coach3} alt="Coach 3" />
            <h3>Augustinson Forger</h3>
          </div>
          <div className="coach">
            <img src={coach4} alt="Coach 4" />
            <h3>Michael Dappa</h3>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Location</h3>
            <p>11 D-Block Way</p>
            <p>Ottawa, ON K15 T6E</p>
          </div>
          <div className="footer-section">
            <h3>Phone</h3>
            <p>613-233-2323</p>
          </div>
          <div className="footer-section">
            <h3>Hours</h3>
            <p>Mon-Sun 10AM-10PM</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Coaches;
