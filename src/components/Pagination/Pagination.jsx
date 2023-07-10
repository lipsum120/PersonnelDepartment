import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = () => {
  const pageCount = 26;
  const [activePage, setActivePage] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  const onCLickNextButton = () => {
    if (pageNumber + 5 <= pageCount) {
      setActivePage(pageNumber + 5);
      setPageNumber(pageNumber + 5);
    }
  };

  const onCLickPreviousButton = () => {
    if (pageNumber > 1) {
      setActivePage(pageNumber - 5);
      setPageNumber(pageNumber - 5);
    }
  };

  return (
    <section className='space-x-2 md:space-x-3'>
      <button onClick={onCLickPreviousButton} className={`${pageNumber == 1 ? 'bg-zinc-300' : 'bg-zinc-800'} w-7 md:w-8 h-7 md:h-8 text-white rounded-lg`}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      {Array.from(Array(5), (e, i) => {
        if (i + pageNumber <= pageCount) {
          return <button 
              key={i} 
              onClick={() => setActivePage(i + pageNumber)} 
              className={`${activePage == i + pageNumber ? 'bg-zinc-800 text-white' : 'hover:bg-stone-200'} w-6 md:w-7 h-6 md:h-7 rounded-lg select-none`}
            >
              {i + pageNumber}
           </button>
        }
      })}
      <button onClick={onCLickNextButton} className={`${5 + pageNumber <= pageCount ? 'bg-zinc-800' : 'bg-zinc-300'} w-7 md:w-8 h-7 md:h-8 text-white rounded-lg`}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </section>
  );
}

export default Pagination;