import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const MyLi = ({ to, icon, name }) => {
  return (
    <li>
      <NavLink
        to={ to }
        className={({ isActive }) => `${isActive ? 'text-white' : 'hover:text-white'} flex items-center px-6 py-4 hover:bg-myLightGray rounded-2xl hover:shadow-xl cursor-pointer space-x-4`}
      >
        <FontAwesomeIcon icon={ icon } />
        <p>{ name }</p>
      </NavLink>
    </li>
  );
}

export default MyLi;