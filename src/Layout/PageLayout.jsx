import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

const PageLayout = ({ children }) => {
  return (
    <div className='flex flex-row'>
      <div className='w-20 md:w-60'>
        <Sidebar />
      </div>
      <div className='flex-1 w-[calc(100%-80px)] md:w-[calc(100%-240px)] mx-auto'>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
