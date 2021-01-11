import * as THREE from 'three';
import { TextureLoader } from 'three';
import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader, useRender } from 'react-three-fiber';
import { EffectComposer, SSAO } from 'react-postprocessing';
// import { useSpring } from '@react-spring/core';
// import { a } from '@react-spring/three';
import { useSpring, animated } from 'react-spring/three';

import dobi from '../../images/dobi.jpg';

const canvasStyles = {
  height: '100vh',
  width: '100vw',
  position: 'absolute',
  top: 0,
  left: 0,
};

function Octahedron() {
  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);
  const vertices = [
    [-1, 0, 0],
    [0, 1, 0],
    [1, 0, 0],
    [0, -1, 0],
    [-1, 0, 0],
  ];
  const { color, pos, ...props } = useSpring({
    color: active ? 'hotpink' : 'white',
    pos: active ? [0, 0, 2] : [0, 0, 0],
    'material-opacity': hovered ? 0.6 : 0.25,
    scale: active ? [1.5, 3, 1.5] : [1, 2, 1],
    rotation: active
      ? [THREE.Math.degToRad(180), 0, THREE.Math.degToRad(45)]
      : [0, 0, 0],
    config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 },
  });
  return (
    <group>
      {/* <animated.line position={pos}>
        <geometry
          attach="geometry"
          vertices={vertices.map((v) => new THREE.Vector3(...v))}
        />
        <animated.lineBasicMaterial attach="material" color={color} />
      </animated.line> */}
      <animated.mesh
        position={pos}
        // onClick={(e) => setActive(!active)}
        // onPointerOver={(e) => setHover(true)}
        // onPointerOut={(e) => setHover(false)}
        // {...props}
      >
        <octahedronGeometry attach="geometry" />
        <meshStandardMaterial
          wireframe
          attach="material"
          color="grey"
          transparent
        />
      </animated.mesh>
      <animated.mesh
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        {...props}
      >
        <octahedronGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="grey" transparent />
      </animated.mesh>
    </group>
  );
}

// function Swarm({ count, mouse, onHoverHandle, onClickHandle }) {
//   const mesh = useRef();
//   const [active, setActive] = useState(0);

//   const texture_1 = useLoader(TextureLoader, dobi);

//   const onClick = () => {
//     onClickHandle(!active);
//     setActive(Number(!active));
//   };

//   const { spring } = useSpring({
//     spring: active,
//   });

//   const color = spring.to([0, 1], ['#ffffffFF', '#C0F6CC']);

//   useFrame(() => {
//     mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
//     mesh.current.scale.x = Math.sin(getElapsedTime()) * 30;
//     // mesh.current.scale.x = mesh.current.scale.x += 0.01;
//     // mesh.current.scale.y = mesh.current.scale.y += 0.02;
//     // mesh.current.scale.z = mesh.current.scale.z += 0.01;
//   });

//   return (
//     <>
//       <mesh
//         ref={mesh}
//         scale={[1, 2, 1]}
//         onPointerOver={(e) => onHoverHandle(1)}
//         onPointerOut={(e) => onHoverHandle(0)}
//         onClick={onClick}
//       >
//         <octahedronBufferGeometry args={[4, 0]} />
//         <a.meshPhongMaterial color={color} map={texture_1} attach="material" />
//       </mesh>
//     </>
//   );
// }

export default function Ether(props) {
  // const [active, setActive] = useState(0);

  // const onHoverHandle = (isHovered) => {
  //   setActive(isHovered);
  // };

  // const onClickHandle = (isClicked) => {
  //   props.onClicked(isClicked);
  // };

  // const { spring } = useSpring({
  //   spring: active,
  // });

  // const color = spring.to([0, 1], ['#007B7B', '#7B0059']);

  // useEffect(() => {
  //   const cursorType = active ? 'pointer' : 'auto';
  //   document.body.style.cursor = cursorType;
  // }, [active]);

  return (
    // <Canvas
    //   style={canvasStyles}
    //   shadowMap
    //   gl={{ alpha: false, antialias: false }}
    //   camera={{ fov: 75, position: [0, 0, 70], near: 10, far: 150 }}
    //   onCreated={(state) => state.gl.setClearColor('#f0f0f0')}
    // >
    //   <ambientLight intensity={1.5} />
    //   <pointLight position={[100, 100, 100]} intensity={2} castShadow />
    //   <a.pointLight
    //     position={[-100, -100, -100]}
    //     intensity={30}
    //     color={color}
    //   />
    //   <Suspense fallback={null}>
    //     <Swarm
    //       count={props.count}
    //       onHoverHandle={(isHovered) => onHoverHandle(isHovered)}
    //       onClickHandle={(isClicked) => onClickHandle(isClicked)}
    //     />
    //   </Suspense>
    //   {/* <EffectComposer multisampling={0}>
    //     <SSAO
    //       samples={31}
    //       radius={20}
    //       intensity={90}
    //       luminanceInfluence={0.1}
    //       color="blue"
    //     />
    //   </EffectComposer> */}
    // </Canvas>
    <Canvas style={canvasStyles}>
      <ambientLight color="lightblue" />
      <pointLight color="white" intensity={1} position={[10, 10, 10]} />
      <Octahedron />
    </Canvas>
  );
}
