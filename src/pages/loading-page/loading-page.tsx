import React, { ReactElement } from 'react';
import { StyledPage } from '../../components/shared-styles/shared-styles';
import './dot-animation.css';
import { StyledLoaderWrapper } from './loading-page.styles';

export function LoadingPage(): ReactElement {
  return (
    <StyledPage data-label="create-recipe-page">
      <StyledLoaderWrapper>
        <p style={{ fontSize: '2rem' }}>Charging the potatoes</p>
        <div className="dot-flashing" />
      </StyledLoaderWrapper>
    </StyledPage>
  );
}
