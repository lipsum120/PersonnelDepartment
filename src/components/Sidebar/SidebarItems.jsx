import { faGauge } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import MyLi from './MyLi';
import Dropdown from './Dropdown/Dropdown';

const SidebarItems = () => {
  return (
    <ul className='text-xl text-zinc-600 space-y-2'>
      <MyLi to={'/'} icon={faGauge} name={'Dashboard'} />
      <MyLi to={'departments/'} icon={faGauge} name={'Departments'} />
      <MyLi to={'employees/'} icon={faGauge} name={'Employees'} />
      <li>
        <Dropdown />
      </li>
    </ul>
  );
}

export default SidebarItems;