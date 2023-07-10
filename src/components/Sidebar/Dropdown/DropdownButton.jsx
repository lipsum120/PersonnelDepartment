import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const DropdownButton = ({ isOpen, setIsOpen, name, icon }) => {
  return (
    <button 
      className={`${isOpen ? 'bg-myLightGray text-white shadow-xl' : ''} flex items-center justify-between w-full px-6 py-4 hover:bg-myLightGray hover:text-white rounded-2xl cursor-pointer hover:shadow-xl`} 
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center space-x-5">
        <FontAwesomeIcon icon={ icon } />
        <p className="select-none">{ name }</p>
      </div>
      <motion.div animate={isOpen ? {rotate: 180} : {rotate: 0}}>
        <FontAwesomeIcon icon={ faAngleDown } />
      </motion.div>
    </button>
  );
}

export default DropdownButton;