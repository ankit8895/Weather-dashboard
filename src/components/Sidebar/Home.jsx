import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tooltip from '../Tooltip/Tooltip';

import { IoHome } from 'react-icons/io5';

const Home = () => {
  const { pathname } = useLocation();
  const isActive = pathname === '/';
  return (
    <Tooltip className='ml-1 font-rubik' text='Home'>
      <Link
        to='/'
        className={`flex items-center gap-4 p-2 w-10 md:w-full justify-center md:justify-start ${
          isActive && 'bg-red-500 rounded-lg'
        }`}
      >
        <IoHome />
        <div className='hidden md:block'>Home</div>
      </Link>
    </Tooltip>
  );
};

export default Home;
