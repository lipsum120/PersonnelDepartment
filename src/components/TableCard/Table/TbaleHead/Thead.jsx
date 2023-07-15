import React from 'react';

const Thead = ({ children }) => {
  return (
    <thead className='sticky top-0 border-b bg-white overflow-auto'>
      <tr>
        { children }
      </tr>
    </thead>
  );
}

export default Thead;