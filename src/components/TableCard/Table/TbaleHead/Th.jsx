import { faAlignRight, faAngleDown, faAngleRight, faAnglesDown, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Th = ({ name, width, isSort }) => {
  return (
    <th className={`${width} whitespace-nowrap px-10 pb-4 font-normal`}>
      <div className='flex space-x-4'>
        <p>{ name }</p>
        { isSort || isSort === undefined ? <button><FontAwesomeIcon icon={faAngleDown}/></button> : ''}
      </div>
    </th>
  );
}

export default Th;