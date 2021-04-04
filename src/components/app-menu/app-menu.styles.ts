import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PotatoSvg from './potato.svg';

export const StyledNavBar = styled.nav`
  position: fixed;
  width: 100%;
  height: 3rem;
  background-color: #635554;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

type NavItemProps = {
  signedin: string;
};

export const StyledNavLink = styled(Link)<NavItemProps>`
  text-decoration: none;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  height: 100%;
  display: ${(props) => (props.signedin === 'true' ? 'flex' : 'none')};
  align-items: center;

  :hover {
    background-color: #4d4242;
  }
`;

export const StyledSignInButton = styled.div`
  text-decoration: none;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;

  :hover {
    background-color: #4d4242;
  }
`;

export const StyledHamburgerMenu = styled(FontAwesomeIcon)`
  text-decoration: none;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const StyledPotatoIcon = styled(PotatoSvg)`
  height: 2rem;
  padding: 0 1rem;
  display: block;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  outline: none;

  :active {
    transform: scale(1.3);
  }

  @media (min-width: 500px) {
    transition: transform 0.5s ease-in-out;

    :hover {
      transform: rotate(360deg);
    }
  }
`;
