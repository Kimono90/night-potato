import React, { ReactElement, useState } from 'react';
import { StyledCreateIngredientItem, StyledFontAwesomeIcon } from './ingredients-input-field.styles';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import type { IIngredient } from '../../../models-and-constants/IRecipe';
import { useMinPlusListLogic } from '../../../hooks/use-min-plus-list-logic';
import { MEASUREMENT_OPTIONS } from '../../../models-and-constants/measurement-options';
import { StyledNumericField, StyledSelectField, StyledTextField } from '../../shared-styles/shared-styles';

type Props = {
  currentIngredient: IIngredient;
  onPlusButtonClick: (id: string, name: string, measurement: string, amount: number) => void;
  onMinusButtonClick: (id: string) => void;
  ingredients: IIngredient[];
};

export function EditableIngredient({
  currentIngredient,
  onPlusButtonClick,
  onMinusButtonClick,
  ingredients,
}: Props): ReactElement {
  const [ingredientName, setIngredientName] = useState<string>('');
  const [amount, setAmount] = useState<number | ''>('');
  const [measurement, setMeasurement] = useState<string>('');
  const [minusButtonState, plusButtonState] = useMinPlusListLogic(
    currentIngredient.id,
    ingredients.flatMap((i) => i.id),
  );

  const handlePlusButtonClick = (): void => {
    if (ingredientName && amount) {
      plusButtonState.set(false);
      onPlusButtonClick(currentIngredient.id, ingredientName, measurement, amount);
    } else alert('not every field is complete!');
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
        value={ingredientName}
        onChange={(event) => setIngredientName(event.target.value)}
      />
      <StyledNumericField
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}
      />
      <StyledSelectField placeholder="" onChange={(e) => setMeasurement(e.target.value)}>
        {MEASUREMENT_OPTIONS.map((o) => (
          <option>{o}</option>
        ))}
      </StyledSelectField>
      <div style={{ minWidth: '5rem' }}>
        {plusButtonComponent}
        {minusButtonComponent}
      </div>
    </StyledCreateIngredientItem>
  );
}
