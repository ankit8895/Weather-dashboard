import React from 'react';
import Tooltip from '../Tooltip/Tooltip';
import { Link, useLocation } from 'react-router-dom';

import ProfileIcon from '../../constant/animateComponent/ProfileIcon';

const Profile = () => {
  const { pathname } = useLocation();
  const isActive = pathname === '/profile';
  return (
    <Tooltip className='ml-1 font-rubik' text='Profile'>
      <Link
        to='/profile'
        className={`flex items-center gap-4 p-2 w-10 md:w-full justify-center md:justify-start font-bold ${
          isActive && 'bg-[#f5f5dc] lg:bg-red-500 lg:text-[#f5f5dc] rounded-lg'
        }`}
      >
        <ProfileIcon />
        <div className='hidden md:block'>Profile</div>
      </Link>
    </Tooltip>
  );
};

export default Profile;
