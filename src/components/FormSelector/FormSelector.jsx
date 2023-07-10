import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const FormSelector = ({ items, selected, setSelected, name }) => {

  return (
    <section className='w-full md:w-[30rem] xl:w-[50rem] space-y-2'>
      <header className='flex items-center justify-between'>
          <p className='font-medium' >{name}</p>
          <section className='space-x-1'>
            <button type='button' onClick={() => setSelected([])} className='px-2.5 py-0.5 bg-zinc-800 text-white rounded-md cursor-pointer'>remove all</button>
            <button type='button' onClick={() => setSelected(items.map(item => {return item.id}))} className='px-2.5 py-0.5 bg-zinc-800 text-white rounded-md cursor-pointer'>add all</button>
          </section>
      </header>
      <main className=' min-h-[13rem] p-2 border bg-zinc-50 rounded-md'>
          {items.map(item => selected.includes(item.id) ?
            <button type='button' key={item.id} onClick={() => setSelected(selected.filter(s => s !== item.id))} className='m-[2px] px-2.5 py-0.5 bg-zinc-800 text-white rounded-md cursor-pointer'>
            <div className='flex flex-wrap items-center space-x-2'>
              <p>{item.name}</p>
              <FontAwesomeIcon icon={faX} size='xs' />
            </div>
            </button> : ''
          )}
      </main> 
      <footer>
          {items.map(item => !selected.includes(item.id) ?
            <button type='button' key={item.id} onClick={() => setSelected([...selected, item.id])} className='m-[2px] px-2.5 py-0.5 bg-zinc-800 text-white rounded-md cursor-pointer'>
            <div className='flex items-center space-x-2'>
              <p>{item.name}</p>
            </div>
            </button> : ''
          )}
      </footer>
    </section>
  );
}

export default FormSelector;