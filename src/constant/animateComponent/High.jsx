import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const High = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/62cbf437-d1cd-4690-bd83-07635b1a5344/92332llC4O.json'
      background='transparent'
      style={{ height: '4rem', width: '4rem' }}
    ></Player>
  );
};

export default High;
