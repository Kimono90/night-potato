import React from 'react';
import { StyledSaveButton } from './save-button.styles';

type Props = {
  onSaveButtonClick: () => void;
};

export function SaveButton({ onSaveButtonClick }: Props) {
  return <StyledSaveButton onClick={() => onSaveButtonClick()}>Create Recipe &#10024;</StyledSaveButton>;
}
