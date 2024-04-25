import React from 'react';
import Tooltip from '../Tooltip/Tooltip';
import { Link, useLocation } from 'react-router-dom';

import { RiTempColdFill } from 'react-icons/ri';

const Temperature = () => {
  const { pathname } = useLocation();
  const isActive = pathname === '/temperature';
  return (
    <Tooltip className='ml-1 font-rubik' text='Temperature'>
      <Link
        to='/temperature'
        className={`flex items-center gap-4 p-2 w-10 md:w-full justify-center md:justify-start ${
          isActive && 'bg-red-500 rounded-lg'
        }`}
      >
        <RiTempColdFill />
        <div className='hidden md:block'>Temp</div>
      </Link>
    </Tooltip>
  );
};

export default Temperature;
