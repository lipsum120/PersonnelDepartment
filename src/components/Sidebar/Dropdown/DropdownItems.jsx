import React, { useState } from 'react';
import { motion } from "framer-motion";
import MyLi from '../MyLi';
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { stringSimilarity } from "string-similarity-js";

const DropddownItems = ({ isOpen }) => {

  const variants = {
    closed: { x: -16, height: 0, opacity: 0 },
    open: { x: 0, height: "21rem", opacity: 1 },
  };

  const branches = [
    {id: "1", name: 'Ashgabat'},
    {id: "2", name: 'Anew'},
    {id: "3", name: 'Turkmenabat'},
    {id: "4", name: 'Dashoguz'},
    {id: "5", name: 'Mary'},
    {id: "6", name: 'Gokdepe'},
    {id: "7", name: 'Turkmenbashy'},
  ];
  const [sortedBranches, setSortedBranches] = useState(branches);

  const onChange = (e) => {
    setSortedBranches(branches.filter(b => b.name.toLowerCase().includes(e.target.value.toLowerCase()) || stringSimilarity(b.name, e.target.value) > 0.5))
    console.log(sortedBranches)
  }

  return (
    <motion.ul 
      className="px-2 overflow-hidden space-y-2 overflow-y-scroll mt-2"
      variants={variants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      transition={{ duration: 0.25 }}
    >
      <li className='px-2 mb-3 mt-1'>
        <input 
          type="text" 
          spellCheck="false"
          className='w-full pt-4 pb-1.5 px-2 bg-transparent appearance-none focus:outline-none border-b border-myLightGray text-white placeholder:text-[#525252]' 
          placeholder='Search branch' 
          onChange={(e) => onChange(e)}
        />
      </li>
      {sortedBranches.length > 0 ? sortedBranches.map((branch) => (
        <MyLi 
          key={branch.id} 
          to={`branches/${branch.id}/`}
          name={branch.name} 
          icon={faCity} 
        />
        )) : 
        <li className='px-2'>
          <p>Not Found</p>
        </li>
      }
    </motion.ul>
  )
}

export default DropddownItems;