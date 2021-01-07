import React from 'react';

import Layout from './components/Layout';
import Ether from './components/Ether';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Button from './components/Button';

const buttonStyle = {
  position: 'absolute',
  textAlign: 'center',
  zIndex: '100',
  bottom: '8%',
  left: '0',
  right: '0',
  width: '15%',
  margin: '0 auto',
};

export default function App() {
  return (
    <Layout>
      <title>Traversing the ether</title>
      <Nav />
      <Hero />
      <Button to={`/gallery/`} style={buttonStyle}>
        &lt; explore &gt;
      </Button>
      <Ether />
    </Layout>
  );
}
