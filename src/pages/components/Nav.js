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

  &:last-child {
    display: none;
  }
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

const links = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/gallery/',
    label: 'Gallery',
  },
  {
    to: '#',
    label: 'Buy my artwork',
  },
  {
    to: '/contact/',
    label: 'Contact me',
  },
];

export default function Nav(props) {
  return (
    <Container>
      {links.map((el, i) => (
        <>
          <li>
            <LinkWithHover
              to={el.to}
              activeStyle={{ color: '#b7b5fc', fontWeight: 400 }}
            >
              {el.label}
            </LinkWithHover>
          </li>
          <Separator>|</Separator>
        </>
      ))}
    </Container>
  );
}
