import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/1a745df2-4f34-4d35-a9f2-c2b253c7fa7e/oYSc5BIDom.json'
      background='transparent'
      style={{ height: '8rem', width: '8rem' }}
    ></Player>
  );
};

export default Loading;
