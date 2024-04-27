import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const GithubIcon = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/aef03301-12e1-42e6-bf9c-456ba720e44b/FodOObFJXT.json'
      background='transparent'
      style={{ height: '5rem', width: '5rem' }}
    ></Player>
  );
};

export default GithubIcon;
