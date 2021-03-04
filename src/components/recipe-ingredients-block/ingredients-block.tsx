import React from 'react';
import type { IIngredient } from '../../models-and-constants/IRecipe';
import { StyledList, StyledSummaryCard, StyledTitle } from '../shared-styles/shared-styles';
import { StyledIngredient } from './ingredients-block.styles';
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

  const ingredientList = ingredients.map((i: IIngredient) => {
    return (<StyledIngredient key={`${i.product}`} data-label="ingredient">
      <FontAwesomeIcon icon={i.isChecked ? faCheckSquare : faSquare} onClick={() => toggleChecked(i)} />
      <p>
        <span style={{textDecoration: i.isChecked ? 'line-through': 'none'}} id="amount">{i.amount} {i.measurement}</span>
        <span style={{textDecoration: i.isChecked ? 'line-through': 'none'}} id="product"> {i.product}</span>
      </p>
    </StyledIngredient>)


  })

  return (
    <StyledSummaryCard data-label="summary-card">
      <StyledTitle data-label="title">Ingredients</StyledTitle>
      <StyledList data-label="ingredient-list">
        {ingredientList}
      </StyledList>
    </StyledSummaryCard>
  )
}