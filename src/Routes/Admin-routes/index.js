import React from 'react'
import { Routes, Route } from "react-router-dom";
import ApprovedRequests from '../../Pages/Admin-panel/Approved-Requests';
import NewRequests from '../../Pages/Admin-panel/New-Requests';
import DeclinedRequests from '../../Pages/Admin-panel/Declined-Requests';

const Index = () => {
  return (
    <>
<Routes>
    <Route path='/' element={<NewRequests />} />
    <Route path="/approvedRequests" element={<ApprovedRequests />} />
    <Route path="/declinedRequests" element={<DeclinedRequests />} />
    </Routes>
    </>
    
  )
}

export default Index