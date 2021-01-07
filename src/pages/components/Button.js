import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const Button = styled(Link)`
  color: #b7b5fc;
  font-family: 'Audiowide';
  text-decoration: none;
  font-size: 2rem;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active {
    cursor: pointer;
    transform: scale(1.1);
    text-shadow: 0 -1px 4px #fff, 0 -2px 10px #b7b5fc, 0 -10px 20px #b7b5fc,
      0 -18px 40px #b7b5fc;
  }

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export default Button;
