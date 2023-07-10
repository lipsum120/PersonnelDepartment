import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import MySearchInput from './SearchInput';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({ setIsOpen, isOpen }) => {
  
	return (
    <header className="flex flex-col lg:flex-row lg:items-center justify-between py-4 md:py-6 px-6 lg:px-10 border-b bg-white space-y-3 lg:space-y-0 lg:space-x-5">
      <section className='flex items-center space-x-4 lg:space-x-0'>
        <button className='flex-none lg:hidden w-8 h-8 flex items-center justify-center bg-zinc-800 text-white rounded-lg' onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <article>
          <h1 className="text-lg sm:text-2xl lg:text-3xl font-medium">Welcome, Admin 💃</h1>
          <h5 className="hidden sm:block whitespace-nowrap lg:text-lg text-zinc-500">Here you can find everything you don't need.</h5>
        </article>
      </section>
      <section>
        <MySearchInput />
      </section>
    </header>
	);
}

export default Header;