// src/pages/Myacc.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Myacc.css';
import {
  FaShieldAlt,
  FaHome,
  FaPiggyBank,
  FaExchangeAlt,
  FaUser,
  FaPhone
} from 'react-icons/fa';

const Myacc = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [selectedBank, setSelectedBank] = useState('');
  const [accounts, setAccounts] = useState([
    { type: 'Current Account', balance: 5400 },
    { type: 'Saving Account', balance: 10200 }
  ]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get('/api/transactions/send');
        setTransactions(res.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const handleAddAccount = () => {
    if (selectedBank) {
      const newAccount = {
        type: `${selectedBank} Account`,
        balance: 0
      };
      setAccounts([...accounts, newAccount]);
      setShowForm(false);
      setSelectedBank('');
    }
  };

  return (
    <div className='MyAccount'>
      <div className="sidebar">
        <div className="logo-section">
          <FaShieldAlt className="logo-icon" />
          <strong>TrustVault</strong>
        </div>
        <ul className="sidebar-menu">
          <li onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>
            <FaHome className="sidebar-icon" />
            Home
          </li>
          <li onClick={() => navigate('/myaccount')} style={{ cursor: 'pointer' }}>
            <FaPiggyBank className="sidebar-icon" />
            My Account
          </li>
          <li onClick={() => navigate('/transfers')} style={{ cursor: 'pointer' }}>
            <FaExchangeAlt className="sidebar-icon" />
            Transfer
          </li>
          <li onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
            <FaUser className="sidebar-icon" />
            Profile
          </li>
        </ul>
        <div className="sidebar-footer">
          <button onClick={() => navigate('/contact-us')} style={{ cursor: 'pointer' }}>
            <FaPhone /> Contact Us
          </button>
        </div>
      </div>

      <div className="dashboard">
        <h2>Good Morning User</h2>
        <div className="account-balance">
          {accounts.map((acc, index) => (
            <div className="balance-box" key={index}>
              <h4>{acc.type}</h4>
              <p>
                {acc.balance} <span>INR</span>
              </p>
            </div>
          ))}
          <div
            className="balance-box add"
            onClick={() => setShowForm(true)}
            style={{ cursor: 'pointer' }}
          >
            <p>Add New Account</p>
            <div className="plus">+</div>
          </div>
        </div>

        <div className="transactions">
          <h3>Transactions</h3>
          <div className="filter-row">
            <label>Filter By</label>
            <select>
              <option>Type</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Date</th>
                <th>Details</th>
                <th>Amount</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index}>
                  <td>{tx.transactionType}</td>
                  <td>{new Date(tx.date).toLocaleDateString()}</td>
                  <td>{tx.recipientName || 'N/A'}</td>
                  <td>{tx.amount} INR</td>
                  <td>{tx.remainingBalance || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button>Prev</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Connect a Bank Account</h3>
            <label>Select Bank</label>
            <select
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
            >
              <option value="">--Choose Bank--</option>
              <option value="HDFC">HDFC Bank</option>
              <option value="ICICI">ICICI Bank</option>
              <option value="SBI">State Bank of India</option>
              <option value="Axis">Axis Bank</option>
              <option value="Kotak">Kotak Mahindra</option>
            </select>
            <div className="modal-actions">
              <button onClick={handleAddAccount}>Connect</button>
              <button onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="right-bar"></div>
    </div>
  );
};

export default Myacc;
