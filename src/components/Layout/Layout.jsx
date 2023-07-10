import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex'>
      <Sidebar isOpen={isOpen} />
      {isOpen ?
        <div 
          className='block lg:hidden fixed top-0 h-screen w-screen bg-black opacity-50 z-40' 
          onClick={() => setIsOpen(false)}
        ></div> : ""
      }
      <div className={`w-full lg:ml-80`}>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;