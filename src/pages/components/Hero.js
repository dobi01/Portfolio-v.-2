import React from 'react';
import styled, { css } from 'styled-components';

import Button from './Button';

const Container = styled.div`
  position: absolute;
  z-index: 100;
  top: 30%;
  left: 15%;
`;

const H1 = styled.h1`
  font-family: 'Audiowide';
  color: #b7b5fc;
  font-size: 4rem;
  color: #ffffff;
  // background: #232323;
  // text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
  //   #b7b5fc 0px 0px 20px, #b7b5fc 0px 0px 30px, #b7b5fc 0px 0px 40px,
  //   #b7b5fc 0px 0px 50px, #b7b5fc 0px 0px 75px;
  text-shadow: 0 -1px 4px #fff, 0 -2px 10px #b7b5fc, 0 -10px 20px #b7b5fc,
    0 -18px 40px #b7b5fc;
`;

const H2 = styled.h2`
  font-size: 1.7rem;
  margin-top: 1rem;
`;

const H3 = styled.h3`
  font-size: 1rem;
  margin-top: 0.3rem;
`;

export default function Hero(props) {
  return (
    <Container>
      <H1>
        traversing
        <br />
        the ether
      </H1>
      <H2>an image a day</H2>
      <H3>by Dobi Okrasa</H3>
      <Button>explore >>></Button>
    </Container>
  );
}
