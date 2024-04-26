import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Cloud = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/183db182-4ddd-4794-8f3c-98d53663b5dc/1UtdNgNNWq.json'
      background='transparent'
      style={{ height: '2rem', width: '2rem' }}
    ></Player>
  );
};

export default Cloud;
