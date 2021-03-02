import React from 'react';
import type { IIngredient } from '../../models-and-constants/IRecipe';
import { StyledSummaryCard, StyledTitle } from '../shared-styles/shared-styles';
import { StyledIngredient, StyledIngredientList } from './ingredients-block.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

type Props = {
  ingredients: IIngredient[];
  onIngredientChange: (newIngredients: IIngredient[]) => void;
}

export default function IngredientsBlock({ingredients, onIngredientChange}: Props) {
  const toggleChecked = (ingredient: IIngredient) => {
    const igs = [...ingredients];

    const toUpdate = igs.find((i) => i.product === ingredient.product);
    if (toUpdate) toUpdate.isChecked = !ingredient.isChecked

    onIngredientChange(igs);
  }

  const ingredientList = ingredients.map((i: IIngredient) =>
  { return i.isChecked ?
    <StyledIngredient key={`${i.product}`} data-label="ingredient">
    <FontAwesomeIcon icon={faCheckSquare} onClick={() => toggleChecked(i)} />
    <s id="amount">{i.amount} {i.measurement}</s>
    <s>{i.product}</s>
  </StyledIngredient> :
    <StyledIngredient key={`${i.product}`} data-label="ingredient">
      <FontAwesomeIcon icon={faSquare} onClick={() => toggleChecked(i)} />
      <p id="amount">{i.amount} {i.measurement}</p>
      <p>{i.product}</p>
    </StyledIngredient>
  })

  return (
    <StyledSummaryCard data-label="summary-card">
      <StyledTitle data-label="title">Ingredients</StyledTitle>
      <StyledIngredientList data-label="ingredient-list">
        {ingredientList}
      </StyledIngredientList>
    </StyledSummaryCard>
  )
}