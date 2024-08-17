import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Seemores from './seemores/Seemores'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/Authprovider';

function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
    {/* <Home/>
    <Seemore/> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/seemore" element={authUser?<Seemores/>:<Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    <Toaster />
    </>
  )
}

export default App
