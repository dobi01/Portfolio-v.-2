import React from 'react';
import { createGlobalStyle } from 'styled-components';
import '@fontsource/open-sans';
import '@fontsource/audiowide';

import SEO from './Seo';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === 'red' ? 'red' : 'white')};
    font-family: "Audiowide";
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
