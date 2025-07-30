import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from '../SignIn/SignIn'
import LogIn from '../LogIn/LogIn'
import Complaints from '../Complaints/Complaints'
import ComplaintForm from '../ComplaintForm/ComplaintForm'



function Home() {
  return (
    <div className='homeSection'>
      {/* <h1 style={{textAlign:"center"}}>This Home Section</h1> */}
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/body" element={<Body />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/complaintsPage" element={<Complaints/>} />
            <Route path="/complaintForm" element={<ComplaintForm/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default Home
