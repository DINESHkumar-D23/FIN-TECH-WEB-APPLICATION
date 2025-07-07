import React from 'react';
import '../css/Insurance.css';
import { useNavigate } from 'react-router-dom';
import InsuranceBro from '../assets/Insurance-bro.svg';
import ServiceSVG from '../assets/Service 24_7-amico.svg';

import {
  FaShieldAlt, FaHome,FaExchangeAlt, FaPhone,
  FaCar, FaMotorcycle, FaHeartbeat, FaPlane, FaHome as FaHouse,
  FaRedo
} from 'react-icons/fa';

import {
  MdDirectionsCar, MdHealthAndSafety,
  MdTravelExplore, MdBusinessCenter
} from 'react-icons/md';
import { HiOutlineShieldCheck } from "react-icons/hi";


const Insurance = () => {
  const navigate = useNavigate();

  return (
    <div className="Insurance">

      {/* Navigation Bar */}
      <div className="nav-animate">
        <div className="nav">
          <div className="nav-left">
            <FaShieldAlt className="logo" />
            <strong>TrustVault</strong>
          </div>

          <ul className="nav-center">
            <li onClick={() => navigate('/home')}>
              <FaHome className="nav-icon" /> Home
            </li>
            <li onClick={() => navigate('/insurance')}>
              <HiOutlineShieldCheck className="nav-icon" /> Insurance
            </li>
            <li onClick={() => navigate('/myaccount')}>
              <FaExchangeAlt className="nav-icon" /> My Account
            </li>
          </ul>

          <div className="nav-right">
            <button onClick={() => navigate('/contact-us')}>
              <FaPhone /> Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="insurance-container">
        <div className="insurance-left">
          <h1>Secure Your Life with TrustVault Insurance</h1>
          <p>Trusted Network for Peace of Mind</p>

          <div className="badge-row">
            <span className="badge">FLASH COVER</span>
            <span className="badge">Cashless Hospitals</span>
            <span className="badge">Senior Plans</span>
          </div>

          <div className="icon-options">
            <div><FaCar /><p>Car</p></div>
            <div><FaMotorcycle /><p>Bike</p></div>
            <div><FaHeartbeat /><p>Health</p></div>
            <div><FaPlane /><p>Travel</p></div>
            <div><FaHouse /><p>Home</p></div>
            <div><FaRedo /><p>Renewals</p></div>
          </div>

          <div className="form-row">
            <input type="text" placeholder="Reg. Number e.g. KA04DK8337" />
            <input type="text" placeholder="+91 Mobile Number" />
            <button>View Plans</button>
          </div>

         <label htmlFor="terms">
             I agree to the <a href="/terms">Terms & Conditions</a>
          </label>
        </div>

        <div className="insurance-right">
          <div className="illustration-placeholder" />
          {/* ✅ Correct usage of imported SVG */}
          <img src={InsuranceBro} alt="insure" />
        </div>
      </div>

      {/* Insurance Cards Section */}
      <h2 className="insurance-heading">All Types Of Insurances</h2>
       <div className="insurance-grid">
        <div className="insurance-card">
          <MdDirectionsCar size={48} color="#BA68C8" />
          <p>Vehicle Insurance</p>
        </div>
        <div className="insurance-card">
          <MdHealthAndSafety size={48} color="#BA68C8" />
          <p>Health Insurance</p>
        </div>
        <div className="insurance-card">
          <MdTravelExplore size={48} color="#BA68C8" />
          <p>Travel Insurance</p>
        </div>
        <div className="insurance-card">
          <MdBusinessCenter size={48} color="#BA68C8" />
          <p>Business Insurance</p>
        </div>
      </div>

      {/* Appointment Section */}
      <section className="appointment-section">
        <div className="appointment-container">
          <div className="appointment-left">
            <div className="service-placeholder" />
            {/* ✅ Correct usage of imported SVG */}
            <img src={ServiceSVG} alt="service" />
          </div>
          <div className="appointment-form glass">
            <h2>Book an Appointment</h2>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Mobile Number" />
            <select>
              <option>Select Insurance Type</option>
              <option>Car Insurance</option>
              <option>Health Insurance</option>
              <option>Travel Insurance</option>
            </select>
            <button>Confirm Booking</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li>Company Info</li>
              <li>Careers</li>
              <li>Press</li>
              <li>TrustVault Highlights</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Live Chat</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li>Dashboard</li>
              <li>Transfers</li>
              <li>Investments</li>
              <li>Insurance Plans</li>
              <li>Profile</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Security Measures</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} TrustVault. All rights reserved. |
          Designed with care for modern finance. | v1.0.0
        </div>
      </footer>
    </div>
  );
};

export default Insurance;
