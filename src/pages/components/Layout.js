import React from 'react';
import { createGlobalStyle } from 'styled-components';
import '@fontsource/open-sans';
import '@fontsource/audiowide';

import SEO from './Seo';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Open Sans";
    font-weight: 100;
    color: #76768B;
  },
  body {
    // color: ${(props) => (props.theme === 'red' ? 'red' : 'white')};
    position: relative;
    height: 100vh;
    width: 100vw;
  }
`;
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="red" />
      {children}
    </React.Fragment>
  );
}
