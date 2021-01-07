import * as React from 'react';
import { Link } from 'gatsby';

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const Contact = () => {
  return (
    <main style={pageStyles}>
      <title>Contact</title>
      <h1 style={headingStyles}>Contact</h1>
      <Link to="/">Go home</Link>.
    </main>
  );
};

export default Contact;
