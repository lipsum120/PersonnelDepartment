import React from 'react';

const CardMain = ({ children }) => {
  return (
    <main className='h-[35rem] overflow-auto'>
        { children }
    </main>
  );
}

export default CardMain;