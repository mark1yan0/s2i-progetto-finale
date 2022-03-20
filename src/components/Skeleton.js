import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import Loading from './animations/Loading';

const Skeleton = ({ type, height, align }) => {
  const animation = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0.5 },
    reset: true,
    config: config.gentle,
    loop: {
      reverse: true,
    },
  });

  const text = type === 'text' ? 'w-1/2 h-6' : '';
  const box = type === 'box' ? `w-full` : '';
  const position =
    align === 'center'
      ? { margin: '0 auto' }
      : align === 'right'
      ? { float: 'right' }
      : undefined;

  return (
    <animated.div
      className={`${text} ${box} bg-gray-300 my-1 rounded-sm flex justify-center items-center`}
      style={{ ...animation, ...position, height: height && height }}
    >
      {type === 'box' && <Loading size='xl' />}
    </animated.div>
  );
};

export default Skeleton;
