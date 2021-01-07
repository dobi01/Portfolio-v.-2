import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div`
  position: absolute;
  z-index: 100;
  top: 30%;
  left: 15%;
`;

const H1 = styled.h1`
  font-family: 'Audiowide';
  font-size: 4rem;
  color: #ffffff;
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

const buttonStyle = {
  'margin-left': '15rem',
};

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
      <Button style={buttonStyle}>explore >>></Button>
    </Container>
  );
}
