import React from 'react';

const TbCRUD = ({ children }) => {
  return (
    <td className='pr-10'>
      <div className='flex space-x-1'>
        { children }  
      </div>
    </td>
  );
}

export default TbCRUD;