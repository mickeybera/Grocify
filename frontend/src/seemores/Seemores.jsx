import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seemore from '../components/Seemore';


function Seemores() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
    <Seemore/>
    </div>
    <Footer/>
    </>
  )
}

export default Seemores
