import React from 'react';
import type { IIngredient } from '../../models-and-constants/IRecipe';
import { StyledIngredient } from './ingredients-block.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

type Props = {
  ingredient: IIngredient;
  toggleChecked: (ingredient: IIngredient) => void;
};

export function Ingredient({ ingredient, toggleChecked }: Props): React.ReactElement {
  return (
    <StyledIngredient key={`${ingredient.id}`} data-label="ingredient" onClick={() => toggleChecked(ingredient)}>
      <FontAwesomeIcon icon={ingredient.isChecked ? faCheckSquare : faSquare} />
      <p>
        <span style={{ textDecoration: ingredient.isChecked ? 'line-through' : 'none' }} id="amount">
          {ingredient.amount} {ingredient.measurement}
        </span>
        <span style={{ textDecoration: ingredient.isChecked ? 'line-through' : 'none' }} id="product">
          {' '}
          {ingredient.product}
        </span>
      </p>
    </StyledIngredient>
  );
}
