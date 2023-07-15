import React from 'react';

const Tb = ({ name, children }) => {
  return (
    <td className='whitespace-nowrap px-10 py-8 font-semibold'>
      <div className='flex items-center'>
        <p>{ name }</p>
        { children }
      </div>
    </td>
  );
}

export default Tb;