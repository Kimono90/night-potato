import React, { ReactElement, useEffect, useState } from 'react';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import type { IIngredient } from '../../../models-and-constants/IRecipe';
import { useMinPlusListLogic } from '../../../hooks/use-min-plus-list-logic';
import { MEASUREMENT_OPTIONS } from '../../../models-and-constants/measurement-options';
import { StyledNumericField, StyledSelectField, StyledTextField } from '../../shared-styles/shared-styles';
import { StyledCreateIngredientItem, StyledFontAwesomeIcon } from './ingredients-input-card.styles';

type Props = {
  currentIngredient: IIngredient;
  onIngredientChange: (ingredient: IIngredient) => void;
  onMinusButtonClick: (id: string) => void;
  ingredients: IIngredient[];
};

export function EditableIngredient({
  currentIngredient,
  onIngredientChange,
  onMinusButtonClick,
  ingredients,
}: Props): ReactElement {
  const [ingredient, setIngredient] = useState<IIngredient>(currentIngredient);
  const [ingredientHasError, setIngredientHasError] = useState<boolean>(false);
  const [amountHasError, setAmountHasError] = useState<boolean>(false);
  const [minusButtonState, plusButtonState] = useMinPlusListLogic(
    currentIngredient.id,
    ingredients.flatMap((i) => i.id),
  );

  useEffect(() => {
    if (ingredient.productName && ingredient.amount) {
      onIngredientChange(ingredient);
    } else {
      setAmountHasError(!ingredient.amount);
      setIngredientHasError(!ingredient.productName);
    }
  }, [ingredient]);

  const minusButtonComponent = minusButtonState.show ? (
    <StyledFontAwesomeIcon icon={faMinusCircle} onClick={() => onMinusButtonClick(currentIngredient.id)} />
  ) : null;

  return (
    <StyledCreateIngredientItem>
      <StyledTextField
        placeholder="Ingredient name"
        value={ingredient.productName}
        onChange={(event) => {
          setIngredientHasError(false);
          setIngredient({ ...ingredient, productName: event.target.value });
        }}
        hasError={`${ingredientHasError}`}
      />
      <StyledNumericField
        placeholder="Amount"
        type="number"
        value={ingredient.amount}
        onChange={(event) => {
          setAmountHasError(false);
          setIngredient({ ...ingredient, amount: Number(event.target.value) });
        }}
        hasError={`${amountHasError}`}
      />
      <StyledSelectField
        placeholder=""
        onChange={(e) => {
          setIngredient({ ...ingredient, measurement: e.target.value });
        }}
      >
        {MEASUREMENT_OPTIONS.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </StyledSelectField>
      <div style={{ minWidth: '5rem' }}>{minusButtonComponent}</div>
    </StyledCreateIngredientItem>
  );
}
