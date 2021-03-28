import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { StyledRecipeLabel } from './recipe-label.styles';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBacon, faFish, faLeaf } from '@fortawesome/free-solid-svg-icons';

export const getFishLabel = (): React.ReactElement => {
  return <RecipeLabel icon={faFish} text="fish" backgroundColor="deepskyblue" />;
};

export const getMeatLabel = (): React.ReactElement => {
  return <RecipeLabel icon={faBacon} text="Meat" backgroundColor="indianred" />;
};

export const getVegetarianLabel = (): React.ReactElement => {
  return <RecipeLabel icon={faLeaf} text="Vegetarian" backgroundColor="mediumspringgreen" />;
};

type Props = {
  icon: IconDefinition;
  text: string;
  backgroundColor: string;
};

function RecipeLabel({ icon, text, backgroundColor }: Props): React.ReactElement {
  return (
    <StyledRecipeLabel backgroundColor={backgroundColor}>
      <FontAwesomeIcon icon={icon} style={{ paddingRight: '0.75rem' }} />
      <span>{text}</span>
    </StyledRecipeLabel>
  );
}
