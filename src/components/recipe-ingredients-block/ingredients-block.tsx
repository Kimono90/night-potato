import React from 'react';
import type { IIngredient } from '../../models-and-constants/IRecipe';
import { StyledSummaryCard, StyledTitle } from '../shared-styles/shared-styles';
import { StyledIngredient, StyledIngredientList } from './ingredients-block.styles';

type Props = {
  ingredients: IIngredient[]
}

export default function IngredientsBlock({ingredients}: Props) {
  const ingredientList = ingredients.map((i) => <StyledIngredient data-label="ingredient">
    <input type="checkbox" />
    <p id="amount">{i.amount} {i.measurement}</p>
    <p>{i.product}</p>
  </StyledIngredient> )

  return (
    <StyledSummaryCard data-label="summary-card">
      <StyledTitle data-label="title">Ingredients</StyledTitle>
      <StyledIngredientList data-label="ingredient-list">
        {ingredientList}
      </StyledIngredientList>
    </StyledSummaryCard>
  )
}