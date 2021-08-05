import React, { ReactElement } from 'react';
import { StyledPage } from '../../components/shared-styles/shared-styles';
import './dot-animation.css';
import { StyledLoaderWrapper } from './loading-page.styles';

export function LoadingPage(): ReactElement {
  const loadingTexts = [
    'Charging the potatoes',
    'Dragging the potato off the couch',
    'Petting the potato',
    'Potating',
    'Frenching the fries',
    'Feeling down? Hug a potato',
    'Muchos potatos',
    'Purée away',
  ];
  const randomText = loadingTexts[Math.floor(Math.random() * loadingTexts.length)];

  return (
    <StyledPage data-label="create-recipe-page">
      <StyledLoaderWrapper>
        <p style={{ fontSize: '2rem' }}>{randomText}</p>
        <div className="dot-flashing" />
      </StyledLoaderWrapper>
    </StyledPage>
  );
}
