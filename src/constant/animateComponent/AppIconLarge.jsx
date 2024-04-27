import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const AppIconLarge = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/b08a9f74-3cf8-480e-a107-8907d214c86f/UvGixMTA0h.json'
      background='transparent'
      style={{ height: `12rem`, width: `12rem` }}
    ></Player>
  );
};

export default AppIconLarge;
