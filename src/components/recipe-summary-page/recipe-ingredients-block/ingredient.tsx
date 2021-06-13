import React, { useState } from 'react';
import type { IIngredient } from '../../../models-and-constants/IRecipe';
import { StyledIngredient } from './ingredients-block.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

type Props = {
  ingredient: IIngredient;
};

export function Ingredient({ ingredient }: Props): React.ReactElement {
  const [isChecked, setIsChecked] = useState<boolean>();

  return (
    <StyledIngredient data-label="ingredient" onClick={() => setIsChecked(!isChecked)}>
      <FontAwesomeIcon icon={isChecked ? faCheckSquare : faSquare} />
      <p>
        <span style={{ textDecoration: isChecked ? 'line-through' : 'none' }} id="amount">
          {ingredient.amount} {ingredient.measurement}
        </span>
        <span style={{ textDecoration: isChecked ? 'line-through' : 'none' }} id="product">
          {' '}
          {ingredient.name}
        </span>
      </p>
    </StyledIngredient>
  );
}
