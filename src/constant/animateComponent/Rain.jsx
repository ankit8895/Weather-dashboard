import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Rain = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/83e6268a-941d-4d69-a415-22db10e9d462/sh2KhDZ8T5.json'
      background='transparent'
      style={{ height: '2rem', width: '2rem' }}
    ></Player>
  );
};

export default Rain;
