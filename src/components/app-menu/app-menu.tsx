import React from 'react';
import { StyledNavBar } from './app-menu.styles';
import { MobileAppMenu } from './app-menu-mobile';
import { DesktopAppMenu } from './app-menu-desktop';

export default function AppMenu() {
  const mobile = window.innerWidth < 500;

  return <StyledNavBar>{mobile ? <MobileAppMenu /> : <DesktopAppMenu />}</StyledNavBar>;
}
