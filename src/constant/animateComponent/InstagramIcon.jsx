import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const InstagramIcon = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/5625f9e2-4088-4635-a135-5556f0d77063/mADjcE59Np.json'
      background='transparent'
      style={{ height: '5rem', width: '5rem' }}
    ></Player>
  );
};

export default InstagramIcon;
