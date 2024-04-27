import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LinkedinIcon = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/d5ea927a-7488-4035-b7e1-db2e53c6ebfb/v1T6c5CFuI.json'
      background='transparent'
      style={{ height: '5rem', width: '5rem' }}
    ></Player>
  );
};

export default LinkedinIcon;
