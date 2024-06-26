import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tooltip from '../Tooltip/Tooltip';

import HomeIcon from '../../constant/animateComponent/HomeIcon';

const Home = () => {
  const { pathname } = useLocation();
  const isActive = pathname === '/';
  return (
    <Tooltip className='ml-1 font-rubik' text='Home'>
      <Link
        to='/'
        className={`flex items-center gap-4 p-2 w-10 md:w-full justify-center md:justify-start font-bold ${
          isActive && 'bg-[#f5f5dc] lg:bg-red-500 lg:text-[#f5f5dc] rounded-lg'
        }`}
      >
        <HomeIcon />
        <div className='hidden md:block'>Home</div>
      </Link>
    </Tooltip>
  );
};

export default Home;
