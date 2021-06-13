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
};

export function EditableIngredient({
  currentIngredient,
  allIngredients,
  onIngredientChange,
  onMinusButtonClick,
  onPlusButtonClick,
}: Props): ReactElement {
  const [ingredient, setIngredient] = useState<IIngredient>(currentIngredient);
  const [ingredientNameHasError, setIngredientHasError] = useState<boolean>(false);
  const [ingredientNameTouched, setIngredientNameTouched] = useState<boolean>(false);
  const [amountHasError, setAmountHasError] = useState<boolean>(false);
  const [amountTouched, setAmountTouched] = useState<boolean>(false);
  const [minusButtonState, plusButtonState] = useMinPlusListLogic(
    currentIngredient.id,
    allIngredients.flatMap((i) => i.id),
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
    setAmountTouched(true);
    setIngredientNameTouched(true);

    if (ingredient.name && ingredient.amount !== 0) {
      plusButtonState.set(false);
      onPlusButtonClick();
    } else {
      setAmountHasError(ingredient.amount === 0);
      setIngredientHasError(!ingredient.name);
    }
  };

  const plusButtonComponent = plusButtonState.show ? (
    <StyledFontAwesomeIcon icon={faPlusCircle} onClick={() => handlePlusButtonClick()} />
  ) : null;

  const minusButtonComponent = minusButtonState.show ? (
    <StyledFontAwesomeIcon icon={faMinusCircle} onClick={() => onMinusButtonClick(currentIngredient.id)} />
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
        onBlur={() => setIngredientNameTouched(true)}
        hasError={`${ingredientNameHasError && ingredientNameTouched}`}
      />
      <StyledNumericField
        placeholder="Amount"
        type="number"
        value={ingredient.amount}
        onChange={(event) => {
          setAmountHasError(false);
          setIngredient({ ...ingredient, amount: Number(event.target.value) });
        }}
        onBlur={() => setAmountTouched(true)}
        hasError={`${amountHasError && amountTouched}`}
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
