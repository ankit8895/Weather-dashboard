import React from 'react';
import { Link } from 'react-router-dom';

import LinkedinIcon from '../constant/animateComponent/LinkedinIcon';
import InstagramIcon from '../constant/animateComponent/InstagramIcon';
import GithubIcon from '../constant/animateComponent/GithubIcon';

const ProfilePage = () => {
  return (
    <div className='font-rubik h-screen rounded-lg border-4 border-white m-1 bg-[#f5f5dc]'>
      <div className='max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900'>
        <div className='rounded-t-lg h-32 overflow-hidden bg-red-500'></div>
        <div className='mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden'>
          <img
            className='object-fill object-center h-36'
            src='./profilepic.jpg'
            alt='profilepic'
          />
        </div>
        <div className='text-center mt-2'>
          <h2 className='font-semibold'>Dev. Ankit</h2>
          <p className='text-gray-500'>Full Stack Developer ( MERN )</p>
        </div>
        <ul className='py-4 mt-2 text-gray-700 flex items-center justify-around'>
          <li className='flex flex-col items-center justify-around'>
            <Link to='https://github.com/ankit8895' target='_blank'>
              <GithubIcon />
            </Link>
          </li>
          <li className='flex flex-col items-center justify-between'>
            <Link to='https://www.linkedin.com/in/ankit14484' target='_blank'>
              <LinkedinIcon />
            </Link>
          </li>
          <li className='flex flex-col items-center justify-around'>
            <Link
              to='https://www.instagram.com/bytemeup404?igsh=Z2x4ZHRzYXUxNXlw'
              target='_blank'
            >
              <InstagramIcon />
            </Link>
          </li>
        </ul>
        <div className='p-4 border-t mx-8 mt-2'>
          <button className='w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-0 md:px-6 py-2'>
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
