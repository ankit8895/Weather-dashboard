import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const AppIconSmall = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/b78a4606-f411-4091-b171-1b40a77ede9b/dFlgS8GG8N.json'
      background='transparent'
      style={{ height: `3rem`, width: `3rem` }}
    ></Player>
  );
};

export default AppIconSmall;
