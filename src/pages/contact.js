import * as React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

import Layout from './components/Layout';
import ContactCircles from './components/ContactCircles';

const Container = styled.div`
  position: absolute;
  z-index: 100;
  top: 48%;
  left: 15%;
`;

const H1 = styled.h1`
  font-size: 4.5rem;
  font-family: Audiowide;
  color: #b7b5fc;
  z-index: 10;
`;

const P = styled.p`
  position: absolute;
  top: 30%;
  right: 10%;

  > svg {
    display: block;
    height: 2rem;
    width: 2rem;
  }
`;

const Contact = () => {
  return (
    <Layout>
      <title>Contact</title>
      <Container>
        <H1>
          “it was supposed to
          <br />
          make you feel
          <br />
          something”
        </H1>
      </Container>
      <P>
        hedone01@gmail.com
        <FaInstagram />
      </P>
      <ContactCircles />
    </Layout>
  );
};

export default Contact;
