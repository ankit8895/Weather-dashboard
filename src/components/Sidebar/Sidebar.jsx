import React from 'react';
import { Link } from 'react-router-dom';
import { TiWeatherSunny } from 'react-icons/ti';
import SidebarItems from './SidebarItems';

const Sidebar = () => {
  return (
    <div className='h-screen border-r py-8 sticky top-0 left-0 px-2 md:px-4 bg-red-500 lg:bg-[#f5f5dc] rounded-lg border-4 border-white m-1'>
      <div className='flex flex-col gap-10 w-full h-full'>
        <Link to='/' className='pl-2 hidden md:block cursor-pointer'>
          {/* <Profile /> */}
        </Link>
        <Link
          to='/'
          className='p-2 block md:hidden cursor-pointer rounded-md w-10'
        >
          <TiWeatherSunny />
        </Link>
        <div className='flex flex-col gap-5 cursor-pointer'>
          <SidebarItems />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
