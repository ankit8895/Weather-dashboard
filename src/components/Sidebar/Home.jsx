import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '../Tooltip/Tooltip';

import { IoHome } from 'react-icons/io5';

const Home = () => {
  return (
    <Tooltip className='ml-1' text='Home'>
      <Link
        to='/'
        className='flex items-center gap-4 p-2 w-10 md:w-full justify-center md:justify-start'
      >
        <IoHome />
        <div className='hidden md:block'>Home</div>
      </Link>
    </Tooltip>
  );
};

export default Home;
