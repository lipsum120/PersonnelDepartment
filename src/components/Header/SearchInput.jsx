import React from 'react';
import { motion } from "framer-motion";

const MySearchInput = () => {
  return (
    <form autoComplete="off">
      <label htmlFor="search-input" className="flex bg-stone-100 py-1 pl-3 pr-1 md:py-1.5 md:pl-4 md:pr-1.5 rounded-xl space-x-2">
        <input 
          spellCheck="false"
          type="text" 
          id="search-input" 
          name="search" 
          className="bg-transparent appearance-none focus:outline-none w-full" 
          placeholder="Search..."
        />
        <motion.button
          whileTap={{scale: 0.95}}
          className="whitespace-nowrap px-2 md:px-3 py-1.5 md:py-2.5 bg-white shadow-[0_0_12px_-2px_rgba(0,0,0,0.1)] rounded-lg md:rounded-xl"
        >
            ⌘ Enter
        </motion.button>
      </label>
    </form>
  );
}

export default MySearchInput;