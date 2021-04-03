import React from 'react';
import { StyledHamburgerMenu, StyledNavBar, StyledNavLink, StyledPotatoIcon } from './app-menu.styles';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { isUserSignedIn, signInToGoogle, signOutOfGoogle } from '../../firebase/google-signin';

export default function AppMenu() {
  const mobile = window.innerWidth < 500;

  const button = !isUserSignedIn() ? (
    <button onClick={() => signInToGoogle()}>SIGN IN</button>
  ) : (
    <button onClick={() => signOutOfGoogle()}>SIGN OUT</button>
  );

  return (
    <StyledNavBar>
      {mobile ? (
        <>
          <Link to="/">
            <StyledPotatoIcon />{' '}
          </Link>
          <StyledHamburgerMenu icon={faBars} />{' '}
        </>
      ) : (
        <>
          <Link to="/">
            <StyledPotatoIcon />
          </Link>
          <StyledNavLink to="/">CREATE RECIPE</StyledNavLink>
          <StyledNavLink to="/">MY RECIPES</StyledNavLink>
          {button}
        </>
      )}
    </StyledNavBar>
  );
}
