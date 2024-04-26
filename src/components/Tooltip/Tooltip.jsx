import React from 'react';

const Tooltip = ({ children, text, className }) => {
  return (
    <div
      className={`relative flex flex-col items-center group ${
        className && className
      }`}
    >
      {children}
      <div className='absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex'>
        <span className='relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg md:hidden font-rubik'>
          {text}
        </span>
        <div className='w-3 h-3 -mt-2 rotate-45 bg-black md:hidden'></div>
      </div>
    </div>
  );
};

export default Tooltip;
