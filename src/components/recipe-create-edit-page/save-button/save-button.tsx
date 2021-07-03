import React from 'react';
import { StyledSaveButton } from './save-button.styles';

type Props = {
  onSaveButtonClick: () => void;
  existingRecipe: boolean;
};

export function SaveButton({ onSaveButtonClick, existingRecipe }: Props) {
  const buttonName = existingRecipe ? 'Save recipe' : 'Create recipe';
  return <StyledSaveButton onClick={() => onSaveButtonClick()}>{buttonName} &#10024;</StyledSaveButton>;
}
