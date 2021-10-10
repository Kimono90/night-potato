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

  function formatNumber(nr: number): string {
    if (nr % 10 === 0) return nr.toString();
    return nr.toFixed(1);
  }

  return (
    <StyledIngredient data-label="ingredient" onClick={() => setIsChecked(!isChecked)}>
      <FontAwesomeIcon icon={isChecked ? faCheckSquare : faSquare} />
      <p style={{ display: 'grid', gridTemplateColumns: '1fr 5fr' }}>
        <span style={{ textDecoration: isChecked ? 'line-through' : 'none', minWidth: '3.5rem' }} id="amount">
          {formatNumber(ingredient.amount ?? 0)} {ingredient.measurement}
        </span>
        <span style={{ textDecoration: isChecked ? 'line-through' : 'none' }} id="product">
          {' '}
          {ingredient.name}
        </span>
      </p>
    </StyledIngredient>
  );
}
