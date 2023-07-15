import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const DropdownButton = ({ isOpen, setIsOpen, name, icon }) => {
  return (
    <button 
      className={`${isOpen ? 'bg-[#FFC234] text-myGray' : ''} flex items-center justify-between w-full px-5 py-5`} 
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center space-x-5">
        <p className="select-none font-bold">{ name }</p>
      </div>
      <motion.div animate={isOpen ? {rotate: 180} : {rotate: 0}}>
        <FontAwesomeIcon icon={ faAngleDown } />
      </motion.div>
    </button>
  );
}

export default DropdownButton;