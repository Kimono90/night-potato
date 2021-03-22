import React from 'react';
import { StyledNavBar, StyledNavLink } from './app-menu.styles';

type Props = {
}

export default function AppMenu({}: Props) {

  return (
  <StyledNavBar>
    <StyledNavLink to='/'>HOME</StyledNavLink>
    <StyledNavLink to='/'>CREATE RECIPE</StyledNavLink>
    <StyledNavLink to='/'>MY RECIPES</StyledNavLink>
  </StyledNavBar>
  )
}