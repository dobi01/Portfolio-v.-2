import React, { useRef, useState, useMemo, Suspense } from 'react';
import { TextureLoader, LinearFilter } from 'three';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import textureUrl from '../images/texture.jpg';

import Button from './components/Button';
import Layout from './components/layout';

const canvasStyles = {
  height: '100vh',
  width: '100vw',
  position: 'absolute',
  top: 0,
  left: 0,
};

const H1 = styled.h1`
  font-size: 10vw;
  text-align: center;
  color: white;
  background-image: url(${textureUrl});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Box = props => {
  // This reference will give us direct access to the mesh so we can animate it
  const mesh = useRef();
  const texture = useLoader(TextureLoader, textureUrl);

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [2, 2, 2] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      {/* <sphereBufferGeometry attach="geometry" args={[1.7, 5, 5]} /> */}
      <torusKnotBufferGeometry attach="geometry" args={[30, 3, 100, 16, 4]} />
      <meshPhongMaterial
        attach="material"
        map={texture}
        depthTest={true}
        // wireframe
        // color={hovered ? 'hotpink' : 'orange'}
      />
      {/* <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
      <meshBasicMaterial color={0xfff1ef} attach="material" /> */}
    </mesh>
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <title>Home Page</title>
      <Link to="/balls">Balls</Link>
      <H1>we are different</H1>
      <H1>we are the same</H1>
      {/* <Button>Normal Button</Button>
      <Button primary>Primary Button</Button> */}
      <Canvas style={canvasStyles}>
        <ambientLight />
        {/* <pointLight color={0xffffff} position={[1, 1, 10]} /> */}
        <Suspense fallback={null}>
          <Box position={[-1.2, 0, 0]} />
        </Suspense>
      </Canvas>
    </Layout>
  );
};

export default IndexPage;
