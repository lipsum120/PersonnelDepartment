import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ name }) => {
  return (
    <motion.button
      whileTap={{scale: 0.9}}
      className='border border-zinc-200 rounded-lg md:rounded-xl text-zinc-400 py-2 md:py-3 px-4 md:px-6 hover:bg-stone-100 hover:border-zinc-400 hover:text-zinc-500'
    >
      <p className='whitespace-nowrap'>{name}</p>
    </motion.button>
  );
}

export default Button;