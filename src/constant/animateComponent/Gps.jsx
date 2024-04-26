import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Gps = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/35c5ab87-dacc-44fd-99f5-31dbc1ba1610/HvMvzMWeBO.json'
      background='transparent'
      style={{ height: '4rem', width: '4rem' }}
    ></Player>
  );
};

export default Gps;
