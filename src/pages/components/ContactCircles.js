import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled, { css } from 'styled-components';

import dobi from '../../images/dobi.jpg';

const containerStyle = {
  background: '#f0f0f0',
  display: 'grid',
  height: '100vh',
  placeItems: 'center',
  width: '100%',
};

const BoxOuter = styled.div`
  border-radius: 50%;
  height: 35vw;
  width: 35vw;
  position: relative;
  box-shadow: 8px 8px 16px #b9bcdf, -8px -8px 16px #ffffff;
  left: 10%;
  top: -5%;
  transform: rotate(10deg) skewX(10deg);
  z-index: 100;

  &::after {
    content: '';
    position: absolute;
    pointer-events: none;
    background: url(${dobi}) center center no-repeat;
    background-size: 100%;
    border-radius: 50%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    will-change: opacity;
    transition: opacity 1s ease-out;
  }

  > div {
    position: absolute;
    will-change: transform;
    border-radius: 50%;
    background-color: #f0f0f0;
    width: 13vw;
    height: 13vw;
    box-shadow: 8px 8px 16px #b9bcdf, -8px -8px 16px #ffffff;
    cursor: pointer;
    will-change: background-color;
    transition: background-color 1s ease-out;
    z-index: 1000;
  }

  ${(props) =>
    props.dobi &&
    css`
      z-index: 10;

      &::after {
        opacity: 1;
      }
      > div {
        background: transparent !important;
      }
    `}
`;

const trans = (x, y) => `translate(${x}px,${y}px) translate(${x}px,${y}px)`;

export default function ContactCircles() {
  const [isClicked, setIsClicked] = useState(false);

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 200, friction: 100 },
  }));

  const handleMouseMove = (e) => {
    set({
      xy: [
        (e.clientX * 150) / window.innerWidth,
        (e.clientY * 150) / window.innerHeight,
      ],
    });
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div style={containerStyle} onMouseMove={handleMouseMove}>
      <BoxOuter dobi={isClicked}>
        <animated.div
          style={{ transform: props.xy.interpolate(trans) }}
          onClick={handleClick}
        ></animated.div>
      </BoxOuter>
    </div>
  );
}
