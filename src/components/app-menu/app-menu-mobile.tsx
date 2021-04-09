import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledHamburgerMenu,
  StyledHamburgerMenuButton,
  StyledNavBar,
  StyledNavLink,
  StyledPotatoIcon,
  StyledSignInButton,
} from './app-menu.styles';
import { faBars, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FirebaseContext } from '../../contexts/firebase-auth-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function MobileAppMenu() {
  const [menuOpen, setMenuOpen] = useState<boolean>();
  const firebaseContext = useContext(FirebaseContext);
  const isLoggedIn = firebaseContext.user;

  return (
    <>
      <StyledNavBar>
        <Link to="/">
          <StyledPotatoIcon />
        </Link>
        <StyledHamburgerMenuButton icon={faBars} onClick={() => setMenuOpen(!menuOpen)} />
      </StyledNavBar>
      <StyledHamburgerMenu show={`${menuOpen}`}>
        <StyledNavLink signedin={`${!!firebaseContext.user}`} to="/">
          CREATE RECIPE
        </StyledNavLink>
        <StyledNavLink signedin={`${!!firebaseContext.user}`} to="/">
          MY RECIPES
        </StyledNavLink>
        <StyledSignInButton>
          {firebaseContext.isLoggingIn ? (
            <span>Logging in...</span>
          ) : (
            <>
              <span
                style={{ marginRight: '0.5rem' }}
                onClick={isLoggedIn ? firebaseContext.logOut : firebaseContext.logIn}
              >
                {`${isLoggedIn ? 'LOG OUT' : 'LOG IN'}`}
              </span>
              <FontAwesomeIcon icon={isLoggedIn ? faSignOutAlt : faSignInAlt} />
            </>
          )}
        </StyledSignInButton>
      </StyledHamburgerMenu>
    </>
  );
}
