import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import Loading from './animations/Loading';

const Skeleton = ({ type, height }) => {
  const props = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0.5 },
    reset: true,
    config: config.gentle,
    loop: {
      reverse: true,
    },
  });

  const text = type === 'text' ? 'w-full h-4' : '';
  const box = type === 'box' ? `w-full` : '';

  return (
    <animated.div
      className={`${text} ${box} bg-gray-300 my-1 rounded-sm flex justify-center items-center`}
      style={{ ...props, height: type === 'box' ? height : undefined }}
    >
      {type === 'box' && <Loading size='xl' />}
    </animated.div>
  );
};

export default Skeleton;
