import React from 'react';
import FormCardHeader from './FormCardHeader';

const FormCard = ({ children, headerName }) => {
  return (
    <section className='bg-white rounded-2xl p-5'>
        <FormCardHeader name={headerName} />
        <main>
          { children }
        </main>
    </section>
  );
}

export default FormCard;