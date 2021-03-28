import React from 'react';
import { StyledHamburgerMenu, StyledNavBar, StyledNavLink, StyledPotatoIcon } from './app-menu.styles';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

type Props = {};

export default function AppMenu({}: Props) {
  const mobile = window.innerWidth < 500;

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
        </>
      )}
    </StyledNavBar>
  );
}
