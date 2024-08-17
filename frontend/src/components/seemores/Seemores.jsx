import React from 'react';
import Navbar from '../Navbar';
import Seemore from '../Seemore';
import Footer from '../Footer';
import list from "../../public/list.json";

function Seemores() {
  console.log(list);
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
