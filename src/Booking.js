import React, { useState } from 'react';
import './Booking.css';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
  const [showContract, setShowContract] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleContinue = () => {
    // Check if all required fields are filled out
    if (name && email && phone && service && selectedDate && selectedTime) {
      setShowContract(true);
      setFormValid(true);
    } else {
      alert("Please fill out all required fields before continuing.");
      setFormValid(false);
    }
  };

  const handleAcceptTerms = () => {
    if (formValid && termsAccepted) {
      setShowContract(false);
      setShowConfirmation(true);
    } else {
      alert("Please fill out all required fields and accept the terms before proceeding.");
    }
  };

  return (
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
        </div>
      </div>

      <div className="booking-container">
        <h2>Booking Form</h2>
        <div className="form-container">
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} className="input-field" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} className="input-field" />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" value={phone} onChange={handlePhoneChange} className="input-field" />
          </div>
          <div className="form-field">
            <label htmlFor="service">Service:</label>
            <select id="service" value={service} onChange={handleServiceChange} className="input-field">
              <option value="">Select a service</option>
              <option value="Training">Training</option>
              <option value="League">League</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="date">Select a Date:</label>
            <DatePicker
              id="date"
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
              className="input-field"
              placeholderText="Select a date"
            />
          </div>
          <div className="form-field">
            <label htmlFor="time">Select a Time:</label>
            <select id="time" value={selectedTime} onChange={handleTimeChange} className="input-field">
              <option value="">Select a time</option>
              <option value="10:00 AM - 1:00 PM">10:00 AM - 1:00 PM</option>
              <option value="1:00 PM - 4:00 PM">1:00 PM - 4:00 PM</option>
              <option value="4:00 PM - 7:00 PM">4:00 PM - 7:00 PM</option>
              <option value="7:00 PM - 10:00 PM">7:00 PM - 10:00 PM</option>
            </select>
          </div>
          <div className="form-field">
            <button onClick={handleContinue}>Continue</button>
          </div>
        </div>
        {showContract && (
          <div className="modal">
            <div className="contract">
              <h3>Contract</h3>
              <p>
                By clicking "Accept Terms", you acknowledge that Football Sensations is not responsible for any injuries or incidents during game days or training sessions.
              </p>
              <div className="form-field">
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" value={name} onChange={handleNameChange} className="input-field" />
              </div>
              <div className="form-field">
                <label>
                  <input type="checkbox" checked={termsAccepted} onChange={handleTermsChange} /> I agree to the terms and conditions.
                </label>
              </div>
              <div className="form-field">
                <button onClick={handleAcceptTerms}>Accept Terms</button>
              </div>
            </div>
          </div>
        )}
        {showConfirmation && (
          <div className="modal">
            <div className="confirmation">
              <h3>Booking Confirmation</h3>
              <p>Your session has officially been booked!</p>
            </div>
          </div>
        )}
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
};

export default Booking;
