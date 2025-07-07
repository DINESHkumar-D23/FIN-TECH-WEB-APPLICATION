import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaShieldAlt, FaHome, FaPiggyBank, FaExchangeAlt,
  FaUser, FaPhone, FaTrash, FaPlus, FaInfoCircle
} from 'react-icons/fa';
import '../css/Transfers.css';

const Transfers = () => {
  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState('1234-5678-1234-5678');
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [cards, setCards] = useState([
    { number: '1234-5678-1234-5678', balance: 50000, user: 'User Name', gradient: 'card-amex', bank: 'ABC Bank', type: 'CREDIT', expiry: '12/26', cvv: '123' },
    { number: '8765-4321-8765-4321', balance: 35500, user: 'User Name', gradient: 'card-master', bank: 'XYZ Bank', type: 'DEBIT', expiry: '09/25', cvv: '456' },
    { number: '4321-8765-1234-8765', balance: 27250, user: 'User Name', gradient: 'card-discover', bank: 'LMN Bank', type: 'DEBIT', expiry: '03/27', cvv: '789' },
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCard, setNewCard] = useState({ number: '', user: '', bank: '', type: '' });
  const allGradients = ['card1', 'card2', 'card-amex', 'card-master', 'card-discover'];

  const [form, setForm] = useState({
    recipientAccount: '', recipientName: '',
    amount: '', confirmAmount: '',
    date: '', note: '', transactionType: 'Transfer'
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [detailCard, setDetailCard] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.recipientAccount) e.recipientAccount = 'Required';
    if (!form.recipientName) e.recipientName = 'Required';
    if (!form.amount) e.amount = 'Required';
    if (form.amount !== form.confirmAmount) e.confirmAmount = 'Must match';
    if (!form.date) e.date = 'Required';
    return e;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    setSuccessMessage('');
  };

  const handleTransferSubmit = (e) => {
  e.preventDefault();
  const ve = validate();
  if (Object.keys(ve).length) {
    setErrors(ve);
    return;
  }

  const amt = parseFloat(form.amount);
  let insufficient = false;

  const updatedCards = cards.map(card => {
    if (card.number === selectedCard) {
      if (card.balance < amt) {
        insufficient = true;
        return card;
      }
      return { ...card, balance: card.balance - amt };
    }
    if (card.number === form.recipientAccount) {
      return { ...card, balance: card.balance + amt };
    }
    return card;
  });

  if (insufficient) {
    setErrors({ amount: 'Insufficient balance' });
    return;
  }

  setCards(updatedCards);

  const tx = {
    type: form.transactionType,
    date: form.date,
    recipientName: form.recipientName,
    amount: form.amount,
    note: form.note
  };

  setRecentTransactions(r => [tx, ...r.slice(0, 4)]);
  setSuccessMessage('Transaction successful!');
  setErrors({});
  setForm({
    recipientAccount: '', recipientName: '',
    amount: '', confirmAmount: '',
    date: '', note: '', transactionType: 'Transfer'
  });
};


  const handleAddCard = () => {
    if (!newCard.number || !newCard.user || !newCard.bank || !newCard.type) {
      alert('Please fill all fields.');
      return;
    }
    const grad = allGradients[cards.length % allGradients.length];
    setCards(c => [...c, {
      ...newCard, balance: 0, gradient: grad, expiry: '--/--', cvv: '***'
    }]);
    setNewCard({ number: '', user: '', bank: '', type: '' });
    setShowAddForm(false);
  };

  return (
    <div className="Transfers">
      {/* Sidebar */}
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
      {/* Main Section */}
      <main className="tr-main">
        {/* Left Side: Cards & Recent */}
        <div className="left-side">
          <section className="cards">
            {cards.map(card => (
              <div
                key={card.number}
                className={`card ${card.gradient} ${selectedCard === card.number ? 'selected' : ''}`}
                onClick={() => setSelectedCard(card.number)}
              >
                <button className="info" onClick={e => { e.stopPropagation(); setDetailCard(card); }}>
                  <FaInfoCircle />
                </button>
                <button className="delete" onClick={e => {
                  e.stopPropagation();
                  setCards(c => c.filter(x => x.number !== card.number));
                }}>
                  <FaTrash />
                </button>
                <div className="type">{card.type}</div>
                <div className="number">**** **** **** {card.number.slice(-4)}</div>
                <div className="user">{card.user}</div>
                <div className="bank">{card.bank}</div>
              </div>
            ))}
            <div className="card add" onClick={() => setShowAddForm(true)}>
              <FaPlus size={24} />
              <div>Add Card</div>
            </div>
          </section>

          <div className="recent">
            <h4>Recent Transactions</h4>
            {recentTransactions.length === 0 ? (
              <p className="none">No recent transactions</p>
            ) : (
              <table className="recent-table">
                <thead>
                  <tr>
                    <th>Type</th><th>Date</th><th>Recipient</th><th>Amount</th><th>Note</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((tx,i) => (
                    <tr key={i}>
                      <td>{tx.type}</td>
                      <td>{tx.date}</td>
                      <td>{tx.recipientName}</td>
                      <td>₹{tx.amount}</td>
                      <td>{tx.note||'—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Right Side: Form */}
        <section className="form">
          <h3>Transfer Funds</h3>
          <form onSubmit={handleTransferSubmit}>
            <select value={selectedCard} onChange={e => setSelectedCard(e.target.value)}>
              {cards.map(c => (
                <option key={c.number} value={c.number}>
                  {c.bank} ****{c.number.slice(-4)} (₹{c.balance.toLocaleString()})
                </option>
              ))}
            </select>
            <input name="recipientAccount" placeholder="Recipient Account" value={form.recipientAccount} onChange={handleFormChange} />
            {errors.recipientAccount && <small>{errors.recipientAccount}</small>}
            <input name="recipientName" placeholder="Recipient Name" value={form.recipientName} onChange={handleFormChange} />
            {errors.recipientName && <small>{errors.recipientName}</small>}
            <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleFormChange} />
            {errors.amount && <small>{errors.amount}</small>}
            <input name="confirmAmount" type="number" placeholder="Confirm Amount" value={form.confirmAmount} onChange={handleFormChange} />
            {errors.confirmAmount && <small>{errors.confirmAmount}</small>}
            <select name="transactionType" value={form.transactionType} onChange={handleFormChange}>
              <option>Transfer</option><option>Payment</option><option>Bill</option><option>Other</option>
            </select>
            <input name="date" type="date" value={form.date} onChange={handleFormChange} />
            {errors.date && <small>{errors.date}</small>}
            <textarea name="note" rows="2" placeholder="Note (optional)" value={form.note} onChange={handleFormChange} />
            <button disabled={!form.amount || !form.recipientAccount || form.amount !== form.confirmAmount || !form.date}>Transfer</button>
            {successMessage && <p className="success">{successMessage}</p>}
          </form>
        </section>
      </main>

      {/* Add Card Modal */}
      {showAddForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Add New Card</h4>
            <input placeholder="Number" value={newCard.number} onChange={e => setNewCard(n => ({...n,number:e.target.value}))} />
            {/* ...other modal inputs/buttons */}
            <button onClick={handleAddCard}>Add</button>
            <button className="cancel" onClick={() => setShowAddForm(false)}>Cancel</button>
          </div>
        </div>
      )}
       
      {/* Card Detail Modal */}
      {detailCard && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Card Details</h4>
            <p><strong>User:</strong> {detailCard.user}</p>
            <p><strong>Number:</strong> {detailCard.number}</p>
            <p><strong>Bank:</strong> {detailCard.bank}</p>
            <p><strong>Type:</strong> {detailCard.type}</p>
            <p><strong>Expiry:</strong> {detailCard.expiry}</p>
            <p><strong>CVV:</strong> {detailCard.cvv}</p>
            <p><strong>Balance:</strong> ₹{detailCard.balance}</p>
            <button onClick={() => setDetailCard(null)}>Close</button>
          </div>
        </div>
        )}
    </div>
  );
};

export default Transfers;
