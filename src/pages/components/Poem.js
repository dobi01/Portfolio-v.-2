import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  z-index: 100;
  top: 15%;
  left: 15%;
`;

const P1 = styled.p`
  margin-bottom: 1rem;
`;

const P2 = styled.p`
  margin-left: 5rem;
  margin-bottom: 1rem;
`;

const P3 = styled.p`
  margin-left: 10rem;
`;

export default function Poem(props) {
  return (
    <Container>
      <P1>
        can we avoid the shame <br />
        of a deliberately <br />
        wasted <br />
        life?
        <br />
        <br />
        let’s find ourselves and lose ourselves <br />
        at the same time
        <br />
        once again
        <br />
        and for the first time
      </P1>
      <P2>
        we are different
        <br />
        we are the same
      </P2>
      <P3>
        intoxicated by uncertainty and wonder <br />
        slowly we thrive <br />
        <br />
        there’s still a fight <br />
        for sheer vastness <br />
        of an ordinary <br />
        mind
      </P3>
    </Container>
  );
}
