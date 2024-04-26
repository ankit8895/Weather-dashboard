import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const HomeIcon = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/b8259bcb-20a8-40c0-bf9e-552be9e7edd0/HZVQpfziTr.json'
      background='transparent'
      style={{ height: '1.75rem', width: '1.75rem' }}
    ></Player>
  );
};

export default HomeIcon;
