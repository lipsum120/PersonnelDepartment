import { motion } from 'framer-motion';
import React, { useState } from 'react';
import DropddownItems from './DropdownItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCity, faSortDown } from '@fortawesome/free-solid-svg-icons';
import DropdownButton from './DropdownButton';

const Dropdown = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div transition={{
      type: "spring",
      duration: 0.4,
      delayChildren: 1,
      staggerChildren: 5,
    }}
    >
      <DropdownButton isOpen={isOpen} setIsOpen={setIsOpen} name={'Branches'} icon={faCity} />
      <DropddownItems selected={selected} setSelected={setSelected} isOpen={isOpen} />
      <motion.div 
        className={`${isOpen ? 'block' : 'hidden'} py-0.5 px-2 flex items-center justify-center w-full`}
        animate={isOpen ? {y: [0, -5, 0]} : {}} 
        transition={isOpen ? {duration: 1, repeat: Infinity, repeatType: "mirror"} : {}} 
      > 
        <FontAwesomeIcon icon={faSortDown} />
      </motion.div>
    </motion.div>
  )
}

export default Dropdown