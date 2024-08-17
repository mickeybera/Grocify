import React from 'react'
import Login from './Login';
import Logout from './Logout';
import { useAuth } from '../context/Authprovider';

function Navbar() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50 shadow-lg rounded-md">
        <div className="flex-1">
          <a className="btn btn-ghost text-4xl text-green-700">
            <span className="text-5xl text-gray-400">G</span>orcefy
          </a>
        </div>
        <div className="flex-none">
          <div className="hidden lg:flex space-x-4">
            <a href="/" className="btn btn-ghost btn-sm text-lg">Home</a>
            <a href="#about" className="btn btn-ghost btn-sm text-lg">About</a>
            <a href="#contact" className="btn btn-ghost btn-sm text-lg">Contact Us</a>
            
          </div>
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact Us</a></li>
              
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end ml-4">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              {
                authUser?<Logout/>:
                <li><a onClick={()=>document.getElementById("my_modal_3").showModal()}>
                Login
                </a>
                <Login/>
              </li> 
              }
            </ul>
          </div>
          <button
            className="btn btn-ghost btn-circle ml-4"
            onClick={() => {
              document.documentElement.setAttribute(
                'data-theme',
                document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m8-9h1m-16 0H3m12.293-5.707l.707.707M6.343 17.657l.707-.707m12.02-12.02l.707.707M6.343 6.343l.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>

    </>
  )
}

export default Navbar
