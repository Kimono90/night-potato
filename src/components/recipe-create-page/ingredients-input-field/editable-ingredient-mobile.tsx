import React, { ReactElement } from 'react';
import { StyledMobileIngredient, StyledRemoveButton } from './ingredients-input-field.styles';
import type { IIngredient } from '../../../models-and-constants/IRecipe';

type Props = {
  ingredient: IIngredient;
};

export function EditableIngredientMobile({ ingredient }: Props): ReactElement {
  return (
    <StyledMobileIngredient data-label="mobile-ingredient">
      <p>
        <span id="amount">
          {ingredient.amount} {ingredient.measurement}
        </span>
        <span id="product"> {ingredient.productName}</span>
      </p>
      <StyledRemoveButton>Remove</StyledRemoveButton>
    </StyledMobileIngredient>
  );
}
