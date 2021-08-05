import React, { ReactElement } from 'react';
import '../../button-loader/button-loader.css';
import { colors } from '../../../styles/potato-styles';
import { StyledActionButton } from '../../shared-styles/shared-styles';

type Props = {
  onSaveButtonClick: (existingRecipe: boolean) => void;
  existingRecipe: boolean;
  isLoading: boolean;
};

export function SaveButton({ onSaveButtonClick, existingRecipe, isLoading }: Props) {
  const buttonText = existingRecipe ? 'Save recipe' : 'Create recipe';
  const loadingText = existingRecipe ? 'Saving recipe' : 'Creating recipe';

  function getButtonContent(): ReactElement {
    return isLoading ? (
      <span style={{ display: 'flex' }}>
        <span style={{ marginRight: '0.5rem' }}>{loadingText}</span>
        <p className="loader" />
      </span>
    ) : (
      <span style={{ marginRight: '0.5rem' }}>{buttonText} &#10024;</span>
    );
  }

  return (
    <StyledActionButton
      backgroundColor={colors.success}
      textColor={colors.white}
      hoverColor={colors.successHover}
      onClick={() => onSaveButtonClick(existingRecipe)}
    >
      {getButtonContent()}
    </StyledActionButton>
  );
}
