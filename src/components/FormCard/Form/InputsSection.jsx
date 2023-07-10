import React from 'react';

const InputsSection = ({ children }) => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-5'>
      { children }
    </section>
  );
}

export default InputsSection;