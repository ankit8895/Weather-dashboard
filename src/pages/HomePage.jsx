import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsByCityName } from '../redux/reducers/weatherReducer';

import { TbWind } from 'react-icons/tb';
import { CiTempHigh } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri';

import Sun from '../constant/animateComponent/Sun';
import Cloud from '../constant/animateComponent/Cloud';
import Rain from '../constant/animateComponent/Rain';
import High from '../constant/animateComponent/High';
import Low from '../constant/animateComponent/Low';
import Gps from '../constant/animateComponent/Gps';
import Error from '../constant/animateComponent/Error';
import Loading from '../constant/animateComponent/Loading';

const HomePage = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [deg, setDeg] = useState(false);

  const { loading, weeklyData, error } = useSelector(
    (state) => state.weeklyDetailsList
  );

  useEffect(() => {
    if (weeklyData.length === 0) {
      dispatch(getDetailsByCityName(search));
    }
  }, [dispatch, weeklyData]);

  const handleSearch = () => {
    dispatch(getDetailsByCityName(search));
  };

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

      const dayOfWeek = days[now.getDay()];
      const dayOfMonth = now.getDate();
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
    <>
      {loading ? (
        <div className='container font-rubik w-full h-screen flex items-center justify-center rounded-lg border-4 border-white m-1 bg-[#f5f5dc]'>
          <Loading />
        </div>
      ) : error ? (
        <div className='container font-rubik w-full h-screen flex items-center justify-center rounded-lg border-4 border-white m-1 bg-[#f5f5dc]'>
          <Error />
        </div>
      ) : weeklyData.length > 0 ? (
        <div className='container font-rubik'>
          <div className='flex rounded-lg border-4 border-white m-1 bg-[#f5f5dc]'>
            <div className='flex-grow p-4'>
              <div className='flex justify-between items-center'>
                <div>
                  <p className='text-3xl font-extrabold text-red-500'>
                    {currentTime}
                  </p>
                  <p className='text-sm mb-4 text-gray-500'>{currentDate}</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between gap-2 items-start'>
                  <button
                    onClick={() => setDeg(false)}
                    className={`py-1.5 px-3 hover:scale-105 hover:shadow text-center border border-gray-300 rounded-full w-12 h-12 flex items-center gap-1 lg:gap-2 ${
                      !deg && 'bg-red-500 text-white'
                    }`}
                  >
                    <RiCelsiusFill />
                  </button>

                  <button
                    onClick={() => setDeg(true)}
                    className={`py-1.5 px-3 hover:scale-105 hover:shadow text-center border border-gray-300 rounded-full w-12 h-12 flex items-center gap-1 lg:gap-2 ${
                      deg && 'bg-red-500 text-white'
                    }`}
                  >
                    <RiFahrenheitFill />
                  </button>
                </div>
              </div>
              <p className='text-lg mb-1'>
                <span className='font-bold'>Weather </span>
                <span className='text-gray-500'>Forcast</span>
              </p>
              <div className='max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300 mb-4'>
                <input
                  type='text'
                  placeholder='Search by City'
                  className='bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  onClick={handleSearch}
                  className='hidden md:flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3'
                >
                  Search
                </button>

                <button
                  onClick={handleSearch}
                  className='md:hidden flex flex-row items-center justify-center w-min px-4 rounded-full border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3'
                >
                  <FaSearch />
                </button>
              </div>
              <p className='text-lg mb-1 font-bold text-left z-10'>Weekly</p>
              <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4'>
                {weeklyData.length > 0 &&
                  weeklyData.map((item, index) => {
                    const windspeed = item.windSpeed.toFixed(2);
                    const temp = deg
                      ? Math.round((item.temp * 9) / 5 + 32)
                      : Math.round(item.temp);
                    const date = new Date();
                    const dayOfWeek =
                      date.getDay() + index > days.length - 1
                        ? days[date.getDay() + index - 7]
                        : days[date.getDay() + index];
                    return (
                      <div
                        key={item.id}
                        className={`flex justify-between gap-2 px-2 py-2 border  rounded-lg ${
                          dayOfWeek === days[date.getDay()]
                            ? 'bg-[#f5f5f5] border-gray-400'
                            : 'border-gray-300'
                        }`}
                      >
                        <div className='flex flex-col justify-evenly'>
                          <div className='mb-2'>
                            <p className='font-bold'>
                              {dayOfWeek === days[date.getDay()]
                                ? 'Today'
                                : dayOfWeek}
                            </p>
                            <p className='text-xs text-gray-500'>
                              {item.season}
                            </p>
                          </div>
                          <div>
                            <p className='text-xs text-gray-500'>
                              <TbWind className='inline mr-2' /> {windspeed}{' '}
                              km/h
                            </p>
                            <p className='text-xs text-gray-500'>
                              <CiTempHigh className='inline mr-2' />{' '}
                              {deg
                                ? ((item.feelsLike * 9) / 5 + 32).toFixed(2)
                                : item.feelsLike}
                              &#176;
                            </p>
                          </div>
                        </div>
                        <div className='flex flex-col justify-between'>
                          <div>
                            {item.season === 'Rain' ? (
                              <Rain />
                            ) : item.season === 'Clouds' ? (
                              <Cloud />
                            ) : (
                              <Sun />
                            )}
                          </div>
                          <div>
                            <p className='text-2xl'>{temp}&#176;</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <p className='text-lg mb-1'>
                <span className='font-bold'>Today's </span>
                <span className='text-gray-500'>Highlights</span>
              </p>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {weeklyData.length > 0 &&
                  [0, 1, 2].map((_, index) => {
                    const range = ['Very Low', 'Moderate', 'Very High'];
                    let humidityPer =
                      weeklyData[0].humidity <= 30
                        ? range[0]
                        : weeklyData[0].humidity <= 60
                        ? range[1]
                        : range[2];
                    let visibilityPer =
                      weeklyData[0].visibility / 1000 <= 1
                        ? range[0]
                        : weeklyData[0].visibility / 1000 <= 4
                        ? range[1]
                        : range[2];
                    let pressurePer =
                      weeklyData[0].pressure <= 980
                        ? range[0]
                        : weeklyData[0].pressure >= 1030
                        ? range[2]
                        : range[1];
                    return (
                      <div
                        key={index}
                        className={`flex ${
                          index === 2 ? 'justify-start' : 'justify-between'
                        } gap-2 p-2 border border-gray-300 rounded-lg`}
                      >
                        <div className='flex flex-col justify-between gap-2'>
                          <p className='text-xs text-gray-500'>
                            {index === 0
                              ? 'Humidity'
                              : index === 1
                              ? 'Visibility'
                              : 'Pressure'}
                          </p>
                          <p className='text-2xl'>
                            {index === 0 && weeklyData[0].humidity + '%'}
                            {index === 1 &&
                              weeklyData[0].visibility / 1000 + ' km'}
                            {index === 2 && weeklyData[0].pressure + ' hPa'}
                          </p>
                          <p className='text-xs text-black font-medium'>
                            {index === 0 && humidityPer}
                            {index === 1 && visibilityPer}
                            {index === 2 && pressurePer}
                          </p>
                        </div>
                        <div
                          className={`${
                            index === 2 ? 'hidden' : 'flex items-center'
                          }`}
                        >
                          <div
                            className={`h-4/5 w-4/5 rounded-3xl border border-gray-500 flex ${
                              index === 0 && humidityPer === 'Very Low'
                                ? 'px-0.5 pt-12'
                                : humidityPer === 'Moderate'
                                ? 'px-0.5 pt-6'
                                : 'p-0.5'
                            } ${
                              index === 1 && visibilityPer === 'Very Low'
                                ? 'px-0.5 pt-12'
                                : visibilityPer === 'Moderate'
                                ? 'px-0.5 pt-6'
                                : 'p-0.5'
                            }`}
                          >
                            <div className='h-3 w-3 rounded-full bg-red-500'></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className='hidden lg:block min-w-80 bg-red-500 rounded-r-lg'>
              <div className='min-w-full min-h-full px-4 flex flex-col justify-center items-center gap-4'>
                <div className='text-white text-3xl flex items-center justify-center mr-8'>
                  <Gps />{' '}
                  {weeklyData[0].city.charAt(0).toUpperCase() +
                    weeklyData[0].city.slice(1)}
                  , {weeklyData[0].country}
                </div>
                <div className='text-6xl  text-white font-bold '>
                  {deg
                    ? Math.round((weeklyData[0].temp * 9) / 5 + 32)
                    : Math.round(weeklyData[0].temp)}
                  &#176;
                </div>
                <div className='font-semibold text-lg'>
                  {weeklyData[0].description}
                </div>
                <div className=' text-white font-bold text-xl flex items-center'>
                  <High />{' '}
                  {deg
                    ? ((weeklyData[0].maxTemp * 9) / 5 + 32).toFixed(2)
                    : weeklyData[0].maxTemp}
                  &#176;&ensp;
                  <Low />{' '}
                  {deg
                    ? ((weeklyData[0].minTemp * 9) / 5 + 32).toFixed(2)
                    : weeklyData[0].minTemp}
                  &#176;
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='container font-rubik w-full h-screen flex items-center justify-center rounded-lg border-4 border-white m-1 bg-[#f5f5dc]'>
          <Loading />
        </div>
      )}
    </>
  );
};

export default HomePage;
