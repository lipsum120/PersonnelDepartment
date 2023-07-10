import React from 'react';
import { motion } from "framer-motion";

const MySearchInput = () => {
  return (
    <form autoComplete="off">
      <label htmlFor="search-input" className="flex bg-stone-100 py-1.5 pl-4 pr-1.5 rounded-xl space-x-2">
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
          className="whitespace-nowrap px-3 py-2.5 bg-white shadow-[0_0_12px_-2px_rgba(0,0,0,0.1)] rounded-xl"
        >
            ⌘ Enter
        </motion.button>
      </label>
    </form>
  );
}

export default MySearchInput;