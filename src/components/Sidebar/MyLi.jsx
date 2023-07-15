import { LayoutGroup, motion } from 'framer-motion';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MyLi = ({ id, to, name, selected, onClick }) => {
  return (
    <Link to={ to }>
      <li className=' relative flex items-center cursor-pointer' onClick={onClick}>
        {selected === to ? 
          <motion.div 
            transition={{duration: 0.2}} 
            layoutId='block' 
            className=' w-2 h-10 bg-[#FFC234] rounded-r-full'
          ></motion.div> : null 
        }
          <motion.p
            transition={{duration: 0.2}} 
            initial={{paddingLeft: '1.2rem'}}
            animate={selected == to ? {paddingLeft: '1.75rem'} : {}} 
            className='pr-20 py-5 font-bold text-white'
          >
            { name }
          </motion.p>
      </li>
    </Link>
  );
}

export default MyLi;