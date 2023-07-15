import React, { useState } from 'react';
import MyLi from './MyLi';
import Dropdown from './Dropdown/Dropdown';
import { LayoutGroup } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const SidebarItems = () => {
  const sidebarLinks = [
    {id: 'dashboard', to: '/', name: 'Dashboard'},
    {id: 'departments', to: '/departments/', name: 'Departments'},
    {id: 'employees', to: '/employees/', name: 'Employees'},
  ];
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);
  return (
    <ul className='text-xl text-white'>
      <LayoutGroup id='links'>
        {sidebarLinks.map((link) => (
          <MyLi 
            key={link.id} 
            onClick={() => setSelected(link.to)}
            id={link.id}
            to={link.to}
            name={link.name} 
            selected={selected}
          />
        ))}
        <li>
          <Dropdown selected={selected} setSelected={setSelected} />
        </li>
      </LayoutGroup>
    </ul>
  );
}

export default SidebarItems;