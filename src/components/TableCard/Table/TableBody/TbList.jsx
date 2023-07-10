import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TbList = ({ id, list }) => {
  const [isBranchListOpen, setIsBranchListOpen] = useState(0);

  return (
    <td className='flex flex-wrap w-80 lg:w-full px-10 py-8 text-sm font-medium'>
      {list.slice(0, isBranchListOpen == id ? list.length : 2).map(l =>
        <Link 
          to={`/branches/${l.id}/`} 
          key={l.id} 
          className='m-[1px] px-2 py-0.5 border border-zinc-800 hover:bg-zinc-800 hover:text-white rounded-md cursor-pointer'
        >
          {l.name}
        </Link>
      )}
      {list.length <= 2 ? '' :
        <button 
          className='m-[1px] px-2 py-0.5 border border-zinc-800 hover:bg-zinc-800 hover:text-white rounded-md' 
          onClick={() => setIsBranchListOpen(id == isBranchListOpen ? 0 : id)}
        >
          {isBranchListOpen == id ? <FontAwesomeIcon icon={faX} size='xs' /> : '..'}
        </button>
      }
    </td>
  );
}

export default TbList;