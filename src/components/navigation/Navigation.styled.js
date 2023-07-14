import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 25px; */
`;

export const NavAuthBox = styled.div`
  display: flex;
  gap: 25px;
`;

export const Nav = styled(NavLink)`
  text-decoration: none;
  color: #1d3e8e;
  font-size: 25px;

  &:hover,
  &:focus {
    color: #00e804;
  }

  &.active {
    color: #696c6f;
  }
`;
