import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/882f0d95-1d7c-4d44-b36a-4f9e3ce89c7e/sTOwXG2CKg.json'
      background='transparent'
      style={{ height: '8rem', width: '8rem' }}
    ></Player>
  );
};

export default Loading;
