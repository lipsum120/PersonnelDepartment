import React from 'react';

const TableCard = ({ name, children }) => {
  return (
    <section className='bg-white rounded-2xl'>
      { children }
    </section>
  );
}

export default TableCard;