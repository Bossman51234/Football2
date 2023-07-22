import React from 'react';
import { Link } from 'react-router-dom';
import './Fields.css';
import field1 from './images/field1.jpg';
import field2 from './images/field2.jpg';
import field3 from './images/field3.jpg';
import field4 from './images/field4.avif';
import field5 from './images/field5.jpg';
import field6 from './images/field6.jpg';

const Fields = () => {
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
      <div className="fields-container">
        <div className="field-row">
          <div className="field">
            <img src={field1} alt="Field 1" className="field-image" />
            <h3>Winterwood Field</h3>
          </div>
          <div className="field">
            <img src={field2} alt="Field 2" className="field-image" />
            <h3>Al Owairan Stadium</h3>
          </div>
        </div>
        <div className="field-row">
          <div className="field">
            <img src={field3} alt="Field 3" className="field-image" />
            <h3>Santan Dave Field</h3>
          </div>
          <div className="field">
            <img src={field4} alt="Field 4" className="field-image" />
            <h3>Diego Armano Park</h3>
          </div>
        </div>
        <div className="field-row">
          <div className="field">
            <img src={field5} alt="Field 5" className="field-image" />
            <h3>Walter White Stadium</h3>
          </div>
          <div className="field">
            <img src={field6} alt="Field 6" className="field-image" />
            <h3>Pablo Junior Place</h3>
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

export default Fields;
