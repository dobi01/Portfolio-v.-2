import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.ul`
  position: fixed;
  top: 3%;
  right: 3%;
  z-index: 100;
  display: flex;
  list-style-type: none;
`;

const Separator = styled.span`
  padding: 0 0.3rem;
`;

const LinkWithHover = styled(Link)`
  text-decoration: none;
  padding: '0.3rem';
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #b7b5fc !important;
    fontweight: 900;
  }
`;

export default function Nav(props) {
  return (
    <Container>
      <li>
        <LinkWithHover
          to={`/`}
          activeStyle={{ color: '#b7b5fc', fontWeight: 900 }}
        >
          Home
        </LinkWithHover>
      </li>
      <Separator>|</Separator>
      <li>
        <LinkWithHover
          to={`/gallery/`}
          activeStyle={{ color: '#b7b5fc', fontWeight: 400 }}
        >
          Gallery
        </LinkWithHover>
      </li>
      <Separator>|</Separator>
      <li>
        <LinkWithHover
          to={`#`}
          activeStyle={{ color: '#b7b5fc', fontWeight: 400 }}
        >
          Buy my artwork
        </LinkWithHover>
      </li>
      <Separator>|</Separator>
      <li>
        <LinkWithHover
          to={`/contact/`}
          activeStyle={{ color: '#b7b5fc', fontWeight: 400 }}
        >
          Contact me
        </LinkWithHover>
      </li>
    </Container>
  );
}
