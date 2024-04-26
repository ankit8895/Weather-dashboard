import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Sun = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/b8cc011b-2971-4db1-b3ca-abf29406f01b/lRQPKMaH1b.json'
      background='transparent'
      style={{ height: '1.75rem', width: '1.75rem' }}
    ></Player>
  );
};

export default Sun;
