import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledNavBar = styled.nav`
  display: none;
  
  @media(min-width: 500px) {
    position: fixed;
    width: 100%;
    height: 3rem;
    background-color: #635554;
    display: flex;
    align-items: center;
  }
  `

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;

  :hover {
    background-color: #4D4242;
  }
`