import React, { ReactElement, useEffect, useState } from 'react';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import type { IIngredient } from '../../../../models-and-constants/IRecipe';
import { MEASUREMENT_OPTIONS } from '../../../../models-and-constants/measurement-options';
import { StyledNumericField, StyledSelectField, StyledTextField } from '../../../shared-styles/shared-styles';
import { StyledCreateIngredientItem, StyledFontAwesomeIcon } from '../create-ingredients-card.styles';
import { useMinPlusListLogic } from '../../../../hooks/use-min-plus-list-logic';

type Props = {
  currentIngredient: IIngredient;
  allIngredients: IIngredient[];
  onIngredientChange: (ingredient: IIngredient) => void;
  onMinusButtonClick: (id: string) => void;
  onPlusButtonClick: () => void;
  hasError: boolean;
};

export function EditableIngredient({
  currentIngredient,
  allIngredients,
  onIngredientChange,
  onMinusButtonClick,
  onPlusButtonClick,
  hasError,
}: Props): ReactElement {
  const [ingredient, setIngredient] = useState<IIngredient>(currentIngredient);
  const [ingredientNameHasError, setIngredientHasError] = useState<boolean>(false);
  const [amountHasError, setAmountHasError] = useState<boolean>(false);
  const [minusButtonState, plusButtonState] = useMinPlusListLogic(
    currentIngredient.ingredientId,
    allIngredients.flatMap((i) => i.ingredientId),
  );

  useEffect(() => {
    if (ingredient.name && ingredient.amount) {
      onIngredientChange(ingredient);
    } else {
      setAmountHasError(!ingredient.amount);
      setIngredientHasError(!ingredient.name);
    }
  }, [ingredient]);

  const handlePlusButtonClick = (): void => {
    if (ingredient.name && !ingredient.amount) {
      plusButtonState.set(false);
      onPlusButtonClick();
    } else {
      setAmountHasError(!ingredient.amount);
      setIngredientHasError(!ingredient.name);
    }
  };

  const plusButtonComponent = plusButtonState.show ? (
    <StyledFontAwesomeIcon icon={faPlusCircle} onClick={() => handlePlusButtonClick()} />
  ) : null;

  const minusButtonComponent = minusButtonState.show ? (
    <StyledFontAwesomeIcon icon={faMinusCircle} onClick={() => onMinusButtonClick(currentIngredient.ingredientId)} />
  ) : null;

  return (
    <StyledCreateIngredientItem>
      <StyledTextField
        placeholder="Ingredient name"
        value={ingredient.name}
        onChange={(event) => {
          setIngredientHasError(false);
          setIngredient({ ...ingredient, name: event.target.value });
        }}
        hasError={`${ingredientNameHasError && hasError}`}
      />
      <StyledNumericField
        placeholder="Amount"
        value={ingredient.amount}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        onChange={(event) => {
          setAmountHasError(false);
          setIngredient({ ...ingredient, amount: Number(event.target.value) });
        }}
        hasError={`${amountHasError && hasError}`}
        width="4.5rem"
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
      <div style={{ minWidth: '5rem' }}>
        {minusButtonComponent}
        {plusButtonComponent}
      </div>
    </StyledCreateIngredientItem>
  );
}
