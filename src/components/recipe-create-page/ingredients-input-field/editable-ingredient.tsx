import React, { ReactElement, useState } from 'react';
import {
  StyledAmountField,
  StyledCreateIngredientItem,
  StyledFontAwesomeIcon,
  StyledIngredientField,
  StyledSelectField,
} from './ingredients-input-field.styles';
import { MEASUREMENT_OPTIONS } from '../../../models-and-constants/MEASUREMENT_OPTIONS';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import type { IIngredient } from '../../../models-and-constants/IRecipe';
import type { OptionTypeBase } from 'react-select';
import { useMinPlusListLogic } from '../../../hooks/use-min-plus-list-logic';

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
  const [measurement, setMeasurement] = useState<OptionTypeBase | null>();
  const [minusButtonState, plusButtonState] = useMinPlusListLogic(
    currentIngredient.id,
    ingredients.flatMap((i) => i.id),
  );

  const handlePlusButtonClick = (): void => {
    if (ingredientName && amount) {
      plusButtonState.set(false);
      onPlusButtonClick(currentIngredient.id, ingredientName, measurement?.value, amount);
    } else alert('not every field is complete!');
  };

  const plusButtonComponent = plusButtonState.show ? (
    <StyledFontAwesomeIcon icon={faPlusCircle} onClick={() => handlePlusButtonClick()} />
  ) : null;
  const minusButtonComponent = minusButtonState.show ? (
    <StyledFontAwesomeIcon icon={faMinusCircle} onClick={() => onMinusButtonClick(currentIngredient.id)} />
  ) : null;

  const measurementOptions = MEASUREMENT_OPTIONS.map((mo) => {
    return {
      value: mo,
      label: mo,
    };
  });

  return (
    <StyledCreateIngredientItem>
      <StyledIngredientField
        placeholder="Ingredient name"
        value={ingredientName}
        onChange={(event) => setIngredientName(event.target.value)}
      />
      <StyledAmountField
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}
      />
      <StyledSelectField placeholder="" options={measurementOptions} onChange={(e) => setMeasurement(e)} />
      <div style={{ minWidth: '5rem' }}>
        {plusButtonComponent}
        {minusButtonComponent}
      </div>
    </StyledCreateIngredientItem>
  );
}
