import React, { useState } from 'react';
import Button from '../../Buttons/Button';

const MyForm = ({ children, handleSubmit, onSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='p-5 space-y-5'>
			{ children }
      <Button name="Save" />
    </form>
  );
}

export default MyForm;