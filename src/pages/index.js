import React from 'react';

import Layout from './components/Layout';
import Ether from './components/Ether';
import Hero from './components/Hero';
import Nav from './components/Nav';

export default function App() {
  return (
    <Layout>
      <title>Traversing the ether</title>
      <Nav />
      <Hero />
      <Ether />
    </Layout>
  );
}
