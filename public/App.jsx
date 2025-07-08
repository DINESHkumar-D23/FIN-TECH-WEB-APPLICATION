import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home    from './pages/Home';
import Myacc   from './pages/Myacc';
import Transfers from './pages/Transfers';
import Profile from './pages/Profile';
import Insurance from './pages/Insurance';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home"      element={<Home />} />
        <Route path="/myaccount" element={<Myacc />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/profile"   element={<Profile />} />
        <Route path='/Insurance' element={<Insurance />}/>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
