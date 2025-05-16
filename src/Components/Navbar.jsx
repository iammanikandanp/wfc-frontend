import React, { useState } from 'react';
import logo from "/logo.jpeg"
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className='w-screen bg-[#000] p-3 fixed top-0 left-0 z-50 shadow-md overflow-x-hidden'>
        <div className="flex justify-between items-center mr-4">
          <div className="">
            <img src={logo} alt="" className='w-[60px] h-[60px]' />
          </div>
          <div>
            <ul className='flex flex-wrap gap-5 text-xl cursor-pointer items-center max-[600px]:gap-3'>
              <li className='text-white hover:text-red-500 max-[600px]:hidden'>
                <a href="#home">Home</a>
              </li>
              <li className='text-white hover:text-red-500 max-[600px]:hidden'>
                <a href="#about">About</a>
              </li>
              <li className='text-white hover:text-red-500 max-[600px]:hidden'>
                <a href="#Service">Services</a>
              </li>
              <li className='text-white hover:text-red-500 max-[600px]:hidden'>
                <a href="#membership">Membership</a>
              </li>
              <li className='text-white hover:text-red-500 max-[600px]:hidden'>
                <a href="#faq">FAQ</a>
              </li>
              <li className='text-white hover:text-red-500 max-[600px]:hidden'>
                <a href="#contact">Contact</a>
              </li>
              <li className='text-white hover:text-red-500 min-[600px]:hidden'>
                <button className='cursor-pointer text-2xl min-[600px]:text-lg' onClick={toggleOpen}>
  <FaBars />
</button>

              </li>
            </ul>
          </div>
        </div>
      </nav>

      {open && (
        <ul className='fixed top-[70px] right-[50px] bg-[#000000] text-lg text-white p-3 rounded-md shadow-lg z-[999] min-[600px]:hidden'>
          <li className='px-4'>
            <a href="#about" onClick={toggleClose} className='cursor-pointer text-left w-full py-1 block hover:text-red-500'>About</a>
          </li>
          <li className='px-4'>
            <a href="#Service" onClick={toggleClose} className='cursor-pointer text-left w-full py-1 block hover:text-red-500'>Services</a>
          </li >
          <li className='px-4'>
            <a href="#membership" onClick={toggleClose} className='cursor-pointer text-left w-full py-1 block hover:text-red-500'>Membership</a>
          </li>
          <li className='px-4'>
            <a href="#faq" onClick={toggleClose} className='cursor-pointer text-left w-full py-1 block hover:text-red-500'>FAQ</a>
          </li>
          <li className='px-4'>
            <a href="#contact" onClick={toggleClose} className='cursor-pointer text-left w-full py-1 block hover:text-red-500'>Contact</a>
          </li>
        </ul>
      )}
    </>
  );
};
