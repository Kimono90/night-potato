import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PotatoSvg from './potato.svg';

export const StyledNavBar = styled.nav`
  position: fixed;
  width: 100%;
  background-color: #635554;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  opacity: 1;

  @media (min-width: 500px) {
    animation: fadeIn 0.6s ease-in-out;

    @keyframes slide {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }
`;

type NavItemProps = {
  signedin: string;
};

export const StyledNavLink = styled(Link)<NavItemProps>`
  text-decoration: none;
  color: white;
  padding: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  display: ${(props) => (props.signedin === 'true' ? 'block' : 'none')};
  text-align: center;
  width: 100%;
  animation: fadeIn 0.4s ease-in-out;
  opacity: 1;

  :hover {
    background-color: #4d4242;
  }

  @media (min-width: 500px) {
    width: unset;
    padding: 0.5rem 1rem;
    height: 100%;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const StyledSignInButton = styled.div`
  text-decoration: none;
  color: white;
  padding: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  display: block;
  text-align: center;
  width: 100%;
  animation: fadeIn 0.4s ease-in-out;
  opacity: 1;

  :hover {
    background-color: #4d4242;
  }

  @media (min-width: 500px) {
    width: unset;
    padding: 0.5rem 1rem;
    height: 100%;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const StyledHamburgerMenuButton = styled(FontAwesomeIcon)`
  text-decoration: none;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

type HamburgerMenuProps = {
  show: string;
};

export const StyledHamburgerMenu = styled.div<HamburgerMenuProps>`
  display: ${(props) => (props.show === 'true' ? 'flex' : 'none')};;
  background-color: #635554;
  height: 100%;
  width: 100%;
  padding-top: 3rem;
  position: fixed;
  animation: slide 0.4s ease-in-out;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
  
  @keyframes slide {
    0% {
      height: 0;
    }

    100% {
      height: 100%;
    }
  }
}
`;

export const StyledPotatoIcon = styled(PotatoSvg)`
  height: 2rem;
  padding: 0.5rem 1rem;
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
