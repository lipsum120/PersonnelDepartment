import React from 'react';

const Table = ({ children }) => {
  return (
    <table className='w-full text-left'>
        { children }
    </table>
  );
}

export default Table;