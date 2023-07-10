import React from 'react';

const Tb = ({ name, children }) => {
  return (
    <td className='whitespace-nowrap px-10 py-8 font-bold'>
      <div className='flex items-center space-x-2'>
        <p>{ name }</p>
        { children }
      </div>
    </td>
  );
}

export default Tb;