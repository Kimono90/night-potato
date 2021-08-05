import React, { ReactElement } from 'react';
import '../../button-loader/button-loader.css';
import { colors } from '../../../styles/potato-styles';
import { StyledActionButton } from '../../shared-styles/shared-styles';

type Props = {
  onEditButtonClick: () => void;
};

export function EditButton({ onEditButtonClick }: Props): ReactElement {
  return (
    <StyledActionButton
      backgroundColor={colors.success}
      textColor={colors.white}
      hoverColor={colors.successHover}
      onClick={onEditButtonClick}
    >
      <span>Edit recipe &#128394;&#65039;</span>
    </StyledActionButton>
  );
}
