import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StyledNavBar, StyledNavLink, StyledPotatoIcon, StyledSignInButton } from './app-menu.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FirebaseContext } from '../../contexts/firebase-auth-context';

export function DesktopAppMenu() {
  const firebaseContext = useContext(FirebaseContext);
  const isLoggedIn = firebaseContext.user;

  return (
    <StyledNavBar>
      <div style={{ display: 'flex' }}>
        <Link to="/">
          <StyledPotatoIcon />
        </Link>
        <StyledNavLink signedin={`${!!firebaseContext.user}`} to="/create">
          CREATE RECIPE
        </StyledNavLink>
        <StyledNavLink signedin={`${!!firebaseContext.user}`} to="/">
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
    </StyledNavBar>
  );
}
