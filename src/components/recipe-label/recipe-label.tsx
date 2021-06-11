import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { StyledRecipeLabel } from './recipe-label.styles';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Props = {
  icon: IconDefinition;
  text: string;
  backgroundColor: string;
  clickAble?: boolean;
};

export function RecipeLabel({ icon, text, backgroundColor, clickAble = false }: Props): React.ReactElement {
  const [isActive, setIsActive] = useState<boolean>(!clickAble);

  function handleClick() {
    if (clickAble) {
      setIsActive(!isActive);
    }
  }

  return (
    <StyledRecipeLabel
      backgroundColor={backgroundColor}
      onClick={() => handleClick()}
      isActive={`${isActive}`}
      clickAble={`${clickAble}`}
    >
      <FontAwesomeIcon icon={icon} style={{ paddingRight: '0.75rem' }} />
      <span style={{ height: '1.5rem' }}>{text}</span>
    </StyledRecipeLabel>
  );
}
