import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { StyledRecipeLabel } from './recipe-label.styles';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Props = {
  icon: IconDefinition;
  text: string;
  backgroundColor: string;
  labelActive?: boolean;
  clickAble?: boolean;
  onChange?: (isActive: boolean) => void;
};

export function RecipeLabel({
  icon,
  text,
  backgroundColor,
  labelActive = true,
  clickAble = false,
  onChange,
}: Props): React.ReactElement {
  function handleClick() {
    if (clickAble) {
      const toggledState = !labelActive;
      if (onChange) {
        onChange(toggledState);
      }
    }
  }

  return (
    <StyledRecipeLabel
      backgroundColor={backgroundColor}
      onClick={() => handleClick()}
      isActive={`${labelActive}`}
      clickAble={`${clickAble}`}
    >
      <FontAwesomeIcon icon={icon} style={{ paddingRight: '0.75rem' }} />
      <span style={{ height: '1.5rem' }}>{text}</span>
    </StyledRecipeLabel>
  );
}
