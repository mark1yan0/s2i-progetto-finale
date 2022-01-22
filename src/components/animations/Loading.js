import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loading = ({ size }) => {
  const animation = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: config.gentle,
  });

  const iconSize = size === 'xl' ? 'text-5xl' : '';

  return (
    <animated.span style={{ ...animation }} className={`${iconSize}`}>
      <AiOutlineLoading3Quarters />
    </animated.span>
  );
};

export default Loading;
