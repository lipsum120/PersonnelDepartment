import React, { useState } from 'react';
import { motion } from "framer-motion";
import MyLi from '../MyLi';
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { stringSimilarity } from "string-similarity-js";

const DropddownItems = ({ isOpen, selected, setSelected }) => {
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
  const onChange = (e) => {
    setSortedBranches(branches.filter(b => b.name.toLowerCase().includes(e.target.value.toLowerCase()) || stringSimilarity(b.name, e.target.value) > 0.5))
    console.log(sortedBranches)
  }
  const [sortedBranches, setSortedBranches] = useState(branches);

  return (
    <motion.ul 
      className="overflow-hidden space-y-2 overflow-y-scroll bg-[#192835]"
      variants={variants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      transition={{ duration: 0.25 }}
    >
      <li className=''>
        <input 
          type="text" 
          spellCheck="false"
          className='w-full py-4 px-5 bg-transparent appearance-none focus:outline-none border-b border-white' 
          placeholder='Search branch' 
          onChange={(e) => onChange(e)}
        />
      </li>
      {sortedBranches.length > 0 ? sortedBranches.map((branch) => (
        <MyLi 
          onClick={() => setSelected(`/branches/${branch.id}/`)}
          id={branch.id} 
          selected={selected}
          key={branch.id} 
          to={`/branches/${branch.id}/`}
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