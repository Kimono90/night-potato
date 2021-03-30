import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { StyledRecipeLabel } from './recipe-label.styles';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Props = {
  icon: IconDefinition;
  text: string;
  backgroundColor: string;
};

export function RecipeLabel({ icon, text, backgroundColor }: Props): React.ReactElement {
  return (
    <StyledRecipeLabel backgroundColor={backgroundColor}>
      <FontAwesomeIcon icon={icon} style={{ paddingRight: '0.75rem' }} />
      <span style={{ height: '1.5rem' }}>{text}</span>
    </StyledRecipeLabel>
  );
}
