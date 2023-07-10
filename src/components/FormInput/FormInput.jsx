import React from 'react';

const FormInput = ({register, errors, inputName, labelName, validation}) => {
  return (
    <div className='flex flex-col space-y-1'>
      <label htmlFor={inputName} className='font-medium'>{labelName}</label>
      <input 
        id={inputName} 
        {...register(inputName, validation)} 
        aria-invalid={errors[inputName] ? "true" : "false"} 
        className={`${errors[inputName] ? 'border-red-500 focus:border-red-500 bg-red-50' : 'bg-zinc-50 focus:border-zinc-900'} py-2.5 px-4 border appearance-none focus:outline-none rounded-lg`} 
      />
      {errors[inputName]?.type === 'required' && <p role="alert" className='text-sm text-red-500'>{errors[inputName]?.message}</p>}
    </div>
  );
}

export default FormInput;