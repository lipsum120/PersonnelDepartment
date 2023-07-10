import React from 'react';
import Pagination from '../Pagination/Pagination';

const CardFooter = () => {
  return (
    <footer className='flex items-center justify-between p-5 space-x-2'>
      <Pagination />
      <section className='hidden md:flex space-x-4 text-sm text-stone-400'>
        <p>All: 90</p>
        <p>Pages: 24</p>
      </section>
    </footer>
  );
}

export default CardFooter;