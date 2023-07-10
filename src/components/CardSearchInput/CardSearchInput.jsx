import React from 'react';

const CardSearchInput = () => {
  return (
    <input 
      type="text" 
      spellCheck="false"
      className='w-full py-2 md:py-3 px-4 border border-zinc-200 appearance-none focus:outline-none rounded-lg md:rounded-xl focus:border-zinc-400' 
      placeholder='Search'
    />
  );
}

export default CardSearchInput;