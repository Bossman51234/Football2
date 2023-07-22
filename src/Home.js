import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // Import the useLanguage hook
import './Home.css';
import footballImage from './images/football-image.jpg';

const Home = () => {
  const { translate, language, setLanguage } = useLanguage();

  // Define the handleLanguageToggle function
  const handleLanguageToggle = () => {
    // Toggle between 'en' (English) and 'fr' (French)
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="nav">
          <div className="nav-buttons-left">
            <Link to="/">{translate('home')}</Link>
            <Link to="/services">{translate('services')}</Link>
          </div>
          <h1 className="title">Football Sensations</h1>
          <div className="nav-buttons-right">
            <Link to="/fields">{translate('fields')}</Link>
            <Link to="/coaches">{translate('coaches')}</Link>
          </div>
          <div className="book-now-box">
            <Link to="/booking" className="book-now-button">{translate('bookNow')}</Link>
          </div>
          <button onClick={handleLanguageToggle}>
            {language === 'en' ? 'Français' : 'English'}
          </button>
        </div>
      </div>
      <div className="content">
        <h2>{translate('welcomeTitle')}</h2>
        <p>{translate('welcomeParagraph1')}</p>
        <p>{translate('welcomeParagraph2')}</p>
        <p>{translate('welcomeParagraph3')}</p>
        <p>{translate('welcomeParagraph4')}</p>
      </div>
        <div className="buttons-container">
        <div className="box">
          <Link to="/Booking" className="button">Book Training</Link>
        </div>
        <div className="box">
          <Link to="/Booking" className="button">Book League</Link>
        </div>
      </div>
      <div class="home-container">
        <div class="image-container">
        <img src={footballImage} alt="Field 6" className="footballimage" />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{translate('locationTitle')}</h3>
            <p>{translate('locationAddress1')}</p>
            <p>{translate('locationAddress2')}</p>
          </div>
          <div className="footer-section">
            <h3>{translate('phoneTitle')}</h3>
            <p>{translate('phoneNumber')}</p>
          </div>
          <div className="footer-section">
            <h3>{translate('hoursTitle')}</h3>
            <p>{translate('hoursInfo')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

