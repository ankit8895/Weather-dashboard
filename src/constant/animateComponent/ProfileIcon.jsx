import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const ProfileIcon = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/7e1005e0-7532-4f16-972d-f8ce35fb1ab7/UNoI3KsRkG.json'
      background='transparent'
      style={{ height: '1.75rem', width: '1.75rem' }}
    ></Player>
  );
};

export default ProfileIcon;
