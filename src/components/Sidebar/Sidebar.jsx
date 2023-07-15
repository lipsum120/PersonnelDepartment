import React from 'react';
import SidebarItems from './SidebarItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Sidebar = ({ isOpen }) => {
  return (
    <>
      <aside className={`${isOpen ? 'flex' : 'hidden'} flex-none lg:flex flex-col justify-between fixed w-80 h-full py-5 bg-myGray text-white z-50`}>
        {/* <button className='absolute top-8 left-[18.5rem] w-10 h-10 bg-[#40B2B1] rounded-full shadow-[0_3px_15px_1px_rgba(0,0,0,0.1)]'>
          <FontAwesomeIcon icon={faAngleRight} size='lg' />
        </button> */}
        <section>
          <header className='mx-4 px-4 pb-3 mb-2 border-b border-[#FFC234]'>
            <h1 className='text-[1.7rem] font-bold'>Dana</h1>
            <h3 className='text-xl font-medium text-white'>Personal departement</h3>
          </header>
          <main className=''>
            <SidebarItems />
          </main>
        </section>
        <footer className='px-5'>
          <article className='flex justify-between items-center'>
            <section>
              <h2 className='text-2xl font-bold'>Admin</h2>
              <h4 className='text-lg font-medium'>SuperAdmin</h4>
            </section>
            <section>
              <button className='px-4 py-3 bg-[#40B2B1] rounded-xl'>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </button>
            </section>
          </article>
        </footer>
      </aside>
      {/* <div className='flex justify-center items-center text-white w-8 h-screen bg-[#40B2B1] ml-80'>
        <FontAwesomeIcon icon={faAngleLeft} size='lg' />
      </div> */}
    </>
  );
}

export default Sidebar;