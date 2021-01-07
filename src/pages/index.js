import React from 'react';

import Layout from './components/Layout';
import Ether from './components/Ether';
import Hero from './components/Hero';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Ether />
    </Layout>
  );
}
