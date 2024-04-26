import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Error = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/f86a7390-9f70-4ad7-b4ba-81ea492072f3/sHvofJ6T2I.json'
      background='transparent'
      style={{ height: '8rem', width: '8rem' }}
    ></Player>
  );
};

export default Error;
