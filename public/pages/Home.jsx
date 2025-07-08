// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

import {
  FaShieldAlt,
  FaHome,
  FaExchangeAlt,
  FaPhone,
} from 'react-icons/fa';

import { HiOutlineShieldCheck } from "react-icons/hi";

import user from '../assets/user.png';
import insu from '../assets/user-shield.png';
import trans from '../assets/transaction-cards.png';
import impa from '../assets/impact.png';
import slide1 from '../assets/SLIDE1.svg';
import slide2 from '../assets/SLIDE2.svg';
import slide3 from '../assets/SLIDE3.svg';
import slide4 from '../assets/SLIDE4.svg';

import SpotlightCard from './SpotlightCard';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='home'>
      {/* Navigation */}
      <div className="nav-animate">
        <div className="nav">
          <div className="nav-left">
            <FaShieldAlt className="logo" />
            <strong>TrustVault</strong>
          </div>
          <ul className="nav-center">
            <li onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>
              <FaHome className="nav-icon" /> Home
            </li>
            <li onClick={() => navigate('/insurance')} style={{ cursor: 'pointer' }}>
              <HiOutlineShieldCheck className="nav-icon" /> Insurance
            </li>
            <li onClick={() => navigate('/myaccount')} style={{ cursor: 'pointer' }}>
              <FaExchangeAlt className="nav-icon" /> My Account
            </li>
          </ul>
          <div className="nav-right">
            <button
              onClick={() => {
                document.getElementById('footer-contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <FaPhone style={{ marginRight: '6px' }} /> Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Animated SVG slider */}
      <div className="svg-slider">
        <div className="slides-wrapper">
          <div className="slide"><img src={slide1} alt="Slide 1" /></div>
          <div className="slide"><img src={slide2} alt="Slide 2" /></div>
          <div className="slide"><img src={slide3} alt="Slide 3" /></div>
          <div className="slide"><img src={slide4} alt="Slide 4" /></div>
        </div>
      </div>

      {/* Left content */}
      <div className="left-half">
        <div className="overlay-content">
          <h1 className="company-name">TrustVault</h1>
          <div className="search-wrapper">
            <img
              src={require('../assets/loupe.png')}
              alt="Search"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search TrustVault"
              className="search-input"
            />
          </div>
        </div>
      </div>

      {/* Features section */}
      <section className="features-section">
        <h2>Manage all Your Finances in one Place</h2>
        <div className="features-content">
          <SpotlightCard spotlightColor="#8F87F1">
            <div className="feature-card">
              <img src={user} alt="user" />
              <h3>Individuals</h3>
              <p>
                Perfect platform for personal budgeting, saving, and tracking
                your expenses.
              </p>
            </div>
          </SpotlightCard>
          <SpotlightCard spotlightColor="#8F87F1">
            <div className="feature-card">
              <img src={insu} alt="insurance" />
              <h3>Insurance</h3>
              <p>
                Manage policies, claims, and payments in a transparent and
                simple way.
              </p>
            </div>
          </SpotlightCard>
          <SpotlightCard spotlightColor="#8F87F1">
            <div className="feature-card">
              <img src={trans} alt="transf" />
              <h3>Transactions</h3>
              <p>
                Quick and secure transfers, giving you without charges
                over your international transaction under the limit.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Steps Section */}
      <section className="zigzag-steps-section">
        <h2>Steps to Begin to Use</h2>
        <div className="zigzag-steps">
          <div className="step-item right">
            <div className="step-circle">1</div>
            <div className="step-text">
              <h3>Create an Account</h3>
              <p>Sign up and create your TrustVault account to get started.</p>
            </div>
          </div>
          <div className="step-item left">
            <div className="step-circle">2</div>
            <div className="step-text">
              <h3>Link Your Financial Info</h3>
              <p>Add your bank, investments, and insurance details securely.</p>
            </div>
          </div>
          <div className="step-item right">
            <div className="step-circle">3</div>
            <div className="step-text">
              <h3>Manage and Track</h3>
              <p>Easily manage your finances and track your progress in one place.</p>
            </div>
          </div>
          <div className="step-item left">
            <div className="step-circle">4</div>
            <div className="step-text">
              <h3>Enjoy the Benefits</h3>
              <p>Make seamless transactions, invest smartly, and stay protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="impact-container">
          <img src={impa} alt="Impact" />
          <div className="impact-text">
            <h2>The Impact of using our platform!</h2>
            <p>
              Enjoy the freedom to travel anywhere without worrying about money
              hassles. Whether you’re exploring new countries or moving to a new
              city, it’s easier than ever to manage your finances on the go.
              Avoid hidden fees, skip long delays, and handle different
              currencies with confidence. Travel feels smoother when your
              finances move with you.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="footer-contact">
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
              <li><button className="footer-link" onClick={() => navigate('/dashboard')}>Dashboard</button></li>
              <li><button className="footer-link" onClick={() => navigate('/transfers')}>Transfers</button></li>
              <li><button className="footer-link" onClick={() => navigate('/investments')}>Investments</button></li>
              <li><button className="footer-link" onClick={() => navigate('/insurance')}>Insurance Plans</button></li>
              <li><button className="footer-link" onClick={() => navigate('/profile')}>Profile</button></li>
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
            <h4>Contact Us On</h4>
            <ul>
              <li>Ph : 1893-523-789</li>
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

export default Home;
