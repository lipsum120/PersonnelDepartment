import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TableButton = ({ name, onClick }) => {
  return (
    <button onClick={onClick} className='py-1 px-2 border border-zinc-800 hover:bg-zinc-800 hover:text-white rounded-md'>{name}</button>
  );
}

export default TableButton;