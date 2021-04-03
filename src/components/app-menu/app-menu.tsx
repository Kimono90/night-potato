import React, { useContext } from 'react';
import {
  StyledHamburgerMenu,
  StyledNavBar,
  StyledNavLink,
  StyledPotatoIcon,
  StyledSignInButton,
} from './app-menu.styles';
import { faBars, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../contexts/firebase-auth-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AppMenu() {
  const mobile = window.innerWidth < 500;
  const firebaseContext = useContext(FirebaseContext);
  const isLoggedIn = firebaseContext.user;

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
          <div style={{ display: 'flex' }}>
            <Link to="/">
              <StyledPotatoIcon />
            </Link>
            <StyledNavLink loggedIn={!!firebaseContext.user} to="/">
              CREATE RECIPE
            </StyledNavLink>
            <StyledNavLink loggedIn={!!firebaseContext.user} to="/">
              MY RECIPES
            </StyledNavLink>
          </div>
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
        </>
      )}
    </StyledNavBar>
  );
}
