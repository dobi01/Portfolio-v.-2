import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import Layout from './components/Layout';
import Ether from './components/Ether';
import Hero from './components/Hero';
import Button from './components/Button';
import Poem from './components/Poem';

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

const containerStyle = {
  position: 'absolute',
  top: '20%',
  left: '0',
  right: '0',
  zIndex: '100',
};

export default function App() {
  const [isPoemVisible, setPoemVisible] = useState(false);
  const [opacityTo1, setTo1] = useSpring(() => ({
    opacity: 1,
    config: { duration: 500 },
  }));
  const [opacityTo0, setTo0] = useSpring(() => ({
    opacity: 0,
    config: { duration: 500 },
  }));

  setTo1({ opacity: isPoemVisible ? 1 : 0 });
  setTo0({ opacity: isPoemVisible ? 0 : 1 });

  const onClicked = (isClicked) => {
    setPoemVisible(isClicked);
  };

  return (
    <Layout>
      <div style={containerStyle}>
        <animated.div style={opacityTo1}>
          <Poem />
        </animated.div>
        <animated.div style={opacityTo0}>
          <Hero />
        </animated.div>
      </div>
      <Button to={`/gallery/`} style={buttonStyle}>
        &lt; explore &gt;
      </Button>
      <Ether onClicked={onClicked} />
    </Layout>
  );
}
