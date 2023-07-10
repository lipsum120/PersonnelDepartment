import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const FormCardHeader = ({ name }) => {
  const navigate = useNavigate()
  return (
    <header className='sm:flex justify-between items-center w-full p-2 lg:p-5 bg-white rounded-lg space-y-4 sm:space-y-0 sm:space-x-5'>
      <section className='flex items-center space-x-3 sm:space-x-5'>
        <button className='w-9 h-9 bg-zinc-800 text-white rounded-lg' onClick={() => navigate(-1)} >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <h1 className='text-xl sm:text-2xl xl:text-3xl font-semibold'>{name}</h1>
      </section>
    </header>
  );
}

export default FormCardHeader;