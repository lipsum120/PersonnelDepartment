import React from 'react';
import SidebarItems from './SidebarItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen }) => {

  return (
    <aside className={`${isOpen ? 'flex' : 'hidden'} flex-none lg:flex flex-col justify-between fixed w-80 h-full px-3 py-7 bg-myGray text-white z-50`}>
      {/* <button className='absolute left-[18.5rem] w-10 h-10 bg-white text-black rounded-full shadow-[0_3px_15px_1px_rgba(0,0,0,0.1)]'>
        <FontAwesomeIcon icon={faAngleRight} size='lg' />
      </button> */}
      <section>
        <header className='px-5 pb-5 mb-5 border-b border-zinc-600'>
          <h1 className='text-3xl font-bold'>Dana</h1>
          <h3 className='text-xl font-medium text-zinc-600'>Personal departement</h3>
        </header>
        <main className=''>
          <SidebarItems />
        </main>
      </section>
      <footer className='px-5'>
        <article className='flex justify-between items-center'>
          <section>
            <h2 className='text-2xl font-bold'>Admin</h2>
            <h4 className='text-lg font-medium text-zinc-600'>SuperAdmin</h4>
          </section>
          <section>
            <button className='px-4 py-3 bg-myLightGray rounded-2xl'>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
          </section>
        </article>
      </footer>
    </aside>
  );
}

export default Sidebar;