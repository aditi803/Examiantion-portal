import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from '../Pages/About';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
// import Profile from '../Pages/Profile-page/Profile';
import SignUp from '../Pages/Signup';
import AdminDashboard from '../Pages/Admin-panel/Admin-Dashboard';

const Index = () => {
  return (
    <>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    {/* <Route path="/profile" element={<Profile />} /> */}
    <Route path="/adminDashboard/*" element={<AdminDashboard />} />
    </Routes>
    </>
  )
}

export default Index