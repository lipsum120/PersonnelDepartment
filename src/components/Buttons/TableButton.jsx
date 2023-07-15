import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TableButton = ({ name, onClick, color }) => {
  return (
    <button onClick={onClick} className={`${color} py-1 px-2 rounded-md font-bold`}>{name}</button>
  );
}

export default TableButton;