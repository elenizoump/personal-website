import React, {
  FunctionComponent,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { useSpring, animated } from 'react-spring';

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const trans = ([x, y, s]: number[]) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Project: FunctionComponent = ({ children }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const [mounted, setMounted] = useState(false);

  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) => {
      if (mounted) {
        set({ xys: calc(x, y) });
      }
    },
    [mounted]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <animated.div
      className="project"
      onMouseMove={onMouseMove}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {children}
    </animated.div>
  );
};

export default Project;
