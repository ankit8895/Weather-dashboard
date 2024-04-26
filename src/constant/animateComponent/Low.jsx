import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Low = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/e782a522-8a61-4180-b2a7-fad9d2985ad9/mPYnhBIv8r.json'
      background='transparent'
      style={{ height: '4rem', width: '4rem' }}
    ></Player>
  );
};

export default Low;
