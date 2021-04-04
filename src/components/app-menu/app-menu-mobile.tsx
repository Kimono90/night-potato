import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHamburgerMenu, StyledPotatoIcon } from './app-menu.styles';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function MobileAppMenu() {
  return (
    <>
      <Link to="/">
        <StyledPotatoIcon />{' '}
      </Link>
      <StyledHamburgerMenu icon={faBars} />{' '}
    </>
  );
}
