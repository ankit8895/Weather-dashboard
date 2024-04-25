import React, { useState, useEffect } from 'react';

import { TbWind } from 'react-icons/tb';
import { CiTempHigh } from 'react-icons/ci';
import { FaCloudSun } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';

const HomePage = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const formattedTime = `${hours}:${
        minutes < 10 ? '0' + minutes : minutes
      } ${ampm}`;
      setCurrentTime(formattedTime);

      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const dayOfWeek = days[now.getDay()];
      const dayOfMonth = now.getMonth();
      const month = months[now.getMonth()];
      const year = now.getFullYear();
      const formattedDate = `${dayOfWeek}, ${
        dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth
      } ${month} ${year}`;
      setCurrentDate(formattedDate);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container font-rubik'>
      <div className='flex rounded-lg border-4 border-white m-1 bg-[#f5f5dc]'>
        <div className='flex-grow p-4'>
          <p className='text-3xl font-extrabold text-red-500'>{currentTime}</p>
          <p className='text-sm mb-4 text-gray-500'>{currentDate}</p>
          <p className='text-lg mb-1'>
            <span className='font-bold'>Weather </span>
            <span className='text-gray-500'>Forcast</span>
          </p>
          <form className='max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300 mb-4'>
            <input
              type='text'
              placeholder='Search by City'
              className='bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0'
              name='topic'
            />
            <button className='hidden md:flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3'>
              Search
            </button>

            <button className='md:hidden flex flex-row items-center justify-center w-min px-4 rounded-full border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3'>
              <FaSearch />
            </button>
          </form>
          <p className='text-lg mb-1 font-bold'>Weekly</p>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4'>
            {[0, 1, 2, 3, 4, 5, 6].map((_, index) => (
              <div
                key={index}
                className='flex justify-between gap-2 px-2 py-2 border border-gray-300 rounded-lg'
              >
                <div className='flex flex-col justify-evenly'>
                  <div className='mb-2'>
                    <p className='font-bold'>Saturday</p>
                    <p className='text-xs text-gray-500'>Rainy</p>
                  </div>
                  <div>
                    <p className='text-xs text-gray-500'>
                      <TbWind className='inline mr-2' /> 11.2 km/h
                    </p>
                    <p className='text-xs text-gray-500'>
                      <CiTempHigh className='inline mr-2' /> 35%
                    </p>
                  </div>
                </div>
                <div className='flex flex-col justify-between'>
                  <div>
                    <FaCloudSun className='w-7 h-7 text-red-500' />
                  </div>
                  <div>
                    <p className='text-2xl'>26&#176;</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className='text-lg mb-1'>
            <span className='font-bold'>Today's </span>
            <span className='text-gray-500'>Highlights</span>
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='flex justify-between gap-2 p-2 border border-gray-300 rounded-lg'>
              <div className='flex flex-col justify-between gap-2'>
                <p className='text-xs text-gray-500'>Humidity</p>
                <p className='text-2xl'>20%</p>
                <p className='text-xs text-black font-medium'>Normal</p>
              </div>
              <div className='flex items-center'>
                <div className='h-4/5 w-4/5 rounded-3xl border border-gray-500 p-0.5 flex justify-start'>
                  <div className='h-3 w-3 rounded-full bg-red-500'></div>
                </div>
              </div>
            </div>

            <div className='flex justify-between gap-2 p-2 border border-gray-300 rounded-lg'>
              <div className='flex flex-col justify-between gap-2'>
                <p className='text-xs text-gray-500'>Air Quality</p>
                <p className='text-2xl'>20%</p>
                <p className='text-xs text-black font-medium'>Poor</p>
              </div>
              <div className='flex items-center'>
                <div className='h-4/5 w-4/5 rounded-3xl border border-gray-500 p-0.5 flex justify-start'>
                  <div className='h-3 w-3 rounded-full bg-red-500'></div>
                </div>
              </div>
            </div>

            <div className='flex justify-start gap-2 p-2 border border-gray-300 rounded-lg'>
              <div className='flex flex-col justify-between gap-2'>
                <p className='text-xs text-gray-500'>Visibility</p>
                <p className='text-2xl'>20%</p>
                <p className='text-xs text-black font-medium'>Average</p>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:block min-w-80 bg-red-500 rounded-r-lg'>
          <div className='min-w-full min-h-full px-4 flex flex-col justify-center items-center gap-4'>
            <p className='text-center text-white text-xl'>
              <CiLocationOn className='inline' /> Dhaka, Bangladesh
            </p>
            <p className='text-6xl text-center text-white font-bold'>
              19&#176;
            </p>
            <p className='text-center'>Rainy</p>
            <p className='text-center text-white font-bold text-xl'>
              H: 24%&ensp;W: 8 km
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
