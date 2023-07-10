import React from 'react';
import CardSearchInput from '../CardSearchInput/CardSearchInput';
import Button from '../Buttons/Button';
import { Link } from 'react-router-dom';

const CardHeader = ({ name, children }) => {
  return (
    <header className='sm:flex justify-between items-center w-full p-6 md:p-8 xl:p-10 bg-white rounded-lg space-y-4 sm:space-y-0 sm:space-x-5'>
      <section className='flex items-center space-x-3 sm:space-x-5 xl:space-x-7'>
        <div className='bg-zinc-800 h-8 sm:h-10 xl:h-12 w-4 sm:w-5 xl:w-6 rounded-md xl:rounded-lg'></div>
        <h1 className='text-xl sm:text-2xl xl:text-3xl font-semibold'>{name}</h1>
      </section>
      <section className='flex items-center space-x-2'>
        { children }
      </section>
    </header>
  );
}

export default CardHeader;