// src/pages/Profile.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // ← import
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import '../css/Profile.css';
import {
  FaShieldAlt,
  FaHome,
  FaPiggyBank,
  FaExchangeAlt,
  FaUser,
  FaPhone,
} from 'react-icons/fa';

const Profile = () => {
  const navigate = useNavigate(); // ← initialize
  const [showEditPersonal, setShowEditPersonal] = useState(false);
  const [showEditAddress, setShowEditAddress] = useState(false);

  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    role: '',
    country: '',
    city: '',
    postalCode: '',
    image: '',
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/profile')
      .then((res) => res.json())
      .then((data) => {
        if (data) setProfileData(data);
      })
      .catch((err) => console.error('❌ Error fetching profile:', err));
  }, []);

  const saveProfileToDB = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || 'Failed to save profile');
      }
      console.log('✅ Profile saved:', result);
      alert('Profile saved successfully!');
      setShowEditPersonal(false);
      setShowEditAddress(false);
    } catch (err) {
      console.error('❌ Error saving profile:', err);
      alert('Failed to save profile.');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const data = [
    { month: 'Jan', income: 4000, expenses: 2400 },
    { month: 'Feb', income: 3000, expenses: 1398 },
    { month: 'Mar', income: 5000, expenses: 3800 },
    { month: 'Apr', income: 4000, expenses: 2000 },
    { month: 'May', income: 6000, expenses: 3908 },
    { month: 'Jun', income: 7000, expenses: 4800 },
    { month: 'Jul', income: 5500, expenses: 2900 },
    { month: 'Aug', income: 5800, expenses: 3100 },
    { month: 'Sep', income: 6100, expenses: 3300 },
    { month: 'Oct', income: 6400, expenses: 3700 },
    { month: 'Nov', income: 6600, expenses: 3900 },
    { month: 'Dec', income: 7000, expenses: 4200 },
  ];

  return (
    <div className="profile-container">
      <div className="sidebar">
        <div className="logo-section">
          <FaShieldAlt className="logo-icon" />
          <strong>TrustVault</strong>
        </div>
        <ul className="sidebar-menu">
          <li
            onClick={() => navigate('/home')}
            style={{ cursor: 'pointer' }}
          >
            <FaHome className="sidebar-icon" />
            Home
          </li>
          <li
            onClick={() => navigate('/myaccount')}
            style={{ cursor: 'pointer' }}
          >
            <FaPiggyBank className="sidebar-icon" />
            My Account
          </li>
          <li
            onClick={() => navigate('/transfers')}
            style={{ cursor: 'pointer' }}
          >
            <FaExchangeAlt className="sidebar-icon" />
            Transfer
          </li>
          <li
            onClick={() => navigate('/profile')}
            style={{ cursor: 'pointer' }}
          >
            <FaUser className="sidebar-icon" />
            Profile
          </li>
        </ul>
        <div className="sidebar-footer">
          <button
            onClick={() => navigate('/contact-us')}
            style={{ cursor: 'pointer' }}
          >
            <FaPhone /> Contact Us
          </button>
        </div>
      </div>

      <div className="profile-card">
        <h2>My Profile</h2>
        <div className="profile-header">
          <img
            src={profileData.image || 'https://via.placeholder.com/100'}
            alt="User"
            className="profile-image"
          />
          <div>
            <h3>
              {profileData.firstName} {profileData.lastName}
            </h3>
            <p>{profileData.role}</p>
            <p>
              {profileData.city}, {profileData.country}
            </p>
          </div>
          <div className="file-upload">
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>
        </div>

        {/* Personal Info Section */}
        <div className="section" style={{ position: 'relative' }}>
          <h4>Personal Information</h4>
          <button
            className="edit-btn"
            onClick={() => setShowEditPersonal(!showEditPersonal)}
          >
            {showEditPersonal ? 'Close' : 'Edit'}
          </button>

          {!showEditPersonal ? (
            <div className="info-row">
              <div>
                <strong>First Name:</strong> {profileData.firstName}
              </div>
              <div>
                <strong>Last Name:</strong> {profileData.lastName}
              </div>
              <div>
                <strong>Date of Birth:</strong> {profileData.dob}
              </div>
              <div>
                <strong>Email:</strong> {profileData.email}
              </div>
              <div>
                <strong>Phone:</strong> {profileData.phone}
              </div>
            </div>
          ) : (
            <>
              <div className="edit-form">
                <input
                  type="text"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                <input
                  type="text"
                  name="dob"
                  value={profileData.dob}
                  onChange={handleChange}
                  placeholder="DOB"
                />
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
              </div>
              <button className="save-btn" onClick={saveProfileToDB}>
                Save Changes
              </button>
            </>
          )}
        </div>

        {/* Address Section */}
        <div className="section" style={{ position: 'relative' }}>
          <h4>Address</h4>
          <button
            className="edit-btn"
            onClick={() => setShowEditAddress(!showEditAddress)}
          >
            {showEditAddress ? 'Close' : 'Edit'}
          </button>

          {!showEditAddress ? (
            <div className="info-row">
              <div>
                <strong>Country:</strong> {profileData.country}
              </div>
              <div>
                <strong>City:</strong> {profileData.city}
              </div>
              <div>
                <strong>Postal Code:</strong> {profileData.postalCode}
              </div>
            </div>
          ) : (
            <>
              <div className="edit-form">
                <input
                  type="text"
                  name="country"
                  value={profileData.country}
                  onChange={handleChange}
                  placeholder="Country"
                />
                <input
                  type="text"
                  name="city"
                  value={profileData.city}
                  onChange={handleChange}
                  placeholder="City"
                />
                <input
                  type="text"
                  name="postalCode"
                  value={profileData.postalCode}
                  onChange={handleChange}
                  placeholder="Postal Code"
                />
              </div>
              <button className="save-btn" onClick={saveProfileToDB}>
                Save Changes
              </button>
            </>
          )}
        </div>

        {/* Chart Section */}
        <div className="section">
          <h4>Annual Income vs Expenses</h4>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="income"
                  stroke="#8884d8"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="expenses"
                  stroke="#82ca9d"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
