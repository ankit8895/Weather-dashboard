import React from 'react';
import Tooltip from '../Tooltip/Tooltip';
import { Link } from 'react-router-dom';

import { RiTempColdFill } from 'react-icons/ri';

const Temperature = () => {
  return (
    <Tooltip className='ml-1' text='Temperature'>
      <Link
        to='/temperature'
        className='flex items-center gap-4 p-2 w-10 md:w-full justify-center md:justify-start'
      >
        <RiTempColdFill />
        <div className='hidden md:block'>Temp</div>
      </Link>
    </Tooltip>
  );
};

export default Temperature;
