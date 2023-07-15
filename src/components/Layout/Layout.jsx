import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex font-raleway'>
      <Sidebar isOpen={isOpen} />
      {isOpen ? <div onClick={() => setIsOpen(false)} className='block lg:hidden absolute top-0 left-0 bg-black bg-opacity-50 w-screen h-screen z-40'></div> : <></>}
      <div className={`${isOpen ? 'fixed' : ''} w-full lg:ml-80`}>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;