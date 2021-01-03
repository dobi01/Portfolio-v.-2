import * as React from 'react';

import Button from './components/Button';
import Layout from './components/layout';

const pageStyles = {
  padding: '96px',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <title>Home Page</title>
        <h1 style={headingStyles}>Hell yeah</h1>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </main>
    </Layout>
  );
};

export default IndexPage;
