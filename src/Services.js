import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

import footwork from './images/footwork.jpg';
import cardio from './images/cardio.jpg';
import speed from './images/speed.jpg';
import practice_plays from './images/practice_plays.jpg';
import scrimmage from './images/scrimmage.jpg';
import all_practice_program from './images/all_practice_program.jpg';
import touch_football from './images/touch_football.jpg';
import flag_football from './images/flag_football.jpg';
import tackle_football from './images/tackle_football.jpg';
import everything from './images/everything.jpg';

const allServices = [
  { id: 1, title: 'Footwork Practice | 25$', category: 'Training', image: footwork },
  { id: 2, title: 'Cardio Practice | 25$', category: 'Training', image: cardio },
  { id: 3, title: 'Speed Practice | 25$', category: 'Training', image: speed },
  { id: 4, title: 'Practice Plays | 25$', category: 'Training', image: practice_plays },
  { id: 5, title: 'Scrimmage | 25$', category: 'Training', image: scrimmage },
  { id: 6, title: 'All Practice Program | 25$', category: 'Training', image: all_practice_program },
  { id: 7, title: 'Touch Football | 100$', category: 'League', image: touch_football },
  { id: 8, title: 'Flag Football | 100$', category: 'League', image: flag_football },
  { id: 9, title: 'Tackle Football | 200$', category: 'League', image: tackle_football },
  { id: 10, title: 'Punting | 25$', category: 'Training', image: everything },
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredServices = selectedCategory === 'All' ? allServices : allServices.filter((service) => service.category === selectedCategory);

  const serviceRows = [];
  let currentRow = [];

  filteredServices.forEach((service, index) => {
    currentRow.push(
      <div key={service.id} className="service">
        <img src={service.image} alt={service.title} className="service-image" />
        <h3>{service.title}</h3>
      </div>
    );

    if (currentRow.length === 2 || index === filteredServices.length - 1) {
      serviceRows.push(
        <div key={index} className="service-row">
          {currentRow}
        </div>
      );
      currentRow = [];
    }
  });

  return (
    <div>
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

      <div className="filter-container">
        <button className={selectedCategory === 'All' ? 'active' : ''} onClick={() => handleFilterChange('All')}>
          All
        </button>
        <button className={selectedCategory === 'Training' ? 'active' : ''} onClick={() => handleFilterChange('Training')}>
          Training
        </button>
        <button className={selectedCategory === 'League' ? 'active' : ''} onClick={() => handleFilterChange('League')}>
          League
        </button>
      </div>

      <div className="services-grid">{serviceRows}</div>

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
};

export default Services;
