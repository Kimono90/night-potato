import React from 'react';
import type { ReactElement } from 'react';
import { StyledMobileIngredient } from '../ingredients-input-card.styles';
import type { IIngredient } from '../../../../models-and-constants/IRecipe';
import { StyledRemoveButton } from '../../../shared-styles/shared-styles';

type Props = {
  ingredient: IIngredient;
  onRemoveClick: (id: string) => void;
  onIngredientClick: (ingredient: IIngredient) => void;
};

export function EditableIngredientMobile({ ingredient, onRemoveClick, onIngredientClick }: Props): ReactElement {
  return (
    <StyledMobileIngredient data-label="mobile-ingredient">
      <p onClick={() => onIngredientClick(ingredient)}>
        <span id="amount">
          {ingredient.amount} {ingredient.measurement}
        </span>
        <span id="product"> {ingredient.productName}</span>
      </p>
      <StyledRemoveButton onClick={() => onRemoveClick(ingredient.id)}>Remove</StyledRemoveButton>
    </StyledMobileIngredient>
  );
}
