import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import ThemeController from "./ThemeController";
import { Link } from "react-router-dom";
import Login from "./Login";


function Navbar() {

  const [sticky,setSticky] = useState(false);

  const handleScroll = ()=>{
    if(scrollY>70){
      setSticky(true)
    }else{
      setSticky(false)
    }
  }
  window.addEventListener('scroll', handleScroll)
  

  const navItems = (
    <>
      <li className="">
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/courses'>Course</Link>
      </li>
      <li>
        <Link to='#'>Contact</Link>
      </li>
      <li>
        <Link to='#'>About</Link>
      </li>
    </>
  );

  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 ${sticky && 'shadow-md bg-zinc-50 duration-300 transition-all ease-in-out z-50'}`}>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-slate-900"
              >
                {navItems}
              </ul>
            </div>
            <a href="/" className="text-2xl font-bold cursor-pointer">Book Store</a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex md:flex-row">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            {/* Search Bar */}
            <div className="hidden md:block">
              <label className="border px-3 py-2 rounded-lg flex items-center gap-2 outline-none">
                <input
                  type="text"
                  className={`grow outline-none ${sticky && 'bg-zinc-50 duration-300 transition-all ease-in-out'} dark:bg-slate-900 bg-transparent`}
                  placeholder="Search"
                  name="search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <ThemeController/>
            {/* Login & Logout Button */}
            <div>
              <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn flex-nowrap dark:text-white dark:bg-slate-900">
                <FaUserAlt className="dark:text-white"/>
                Login
              </button>
              <Login/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
