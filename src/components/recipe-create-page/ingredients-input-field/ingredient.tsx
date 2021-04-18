import React, { ReactElement, useEffect, useState } from 'react';
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

type Props = {
  currentIngredient: IIngredient;
  onPlusButtonClick: (id: string, name: string, measurement: string, amount: number) => void;
  onMinusButtonClick: (id: string) => void;
  ingredients: IIngredient[];
};

export function Ingredient({
  currentIngredient,
  onPlusButtonClick,
  onMinusButtonClick,
  ingredients,
}: Props): ReactElement {
  const [ingredientName, setIngredientName] = useState<string>('');
  const [amount, setAmount] = useState<number | ''>('');
  const [measurement, setMeasurement] = useState<OptionTypeBase | null>();
  const [showPlusIcon, setShowPlusIcon] = useState<boolean>(false);
  const [showMinusIcon, setShowMinusIcon] = useState<boolean>(false);

  useEffect(() => {
    const currentIngredientIndex = ingredients.findIndex((i) => i.id === currentIngredient.id);

    if (currentIngredientIndex === -1) setShowPlusIcon(true);
    setShowMinusIcon(!!ingredients.length);
  }, [ingredients, currentIngredient]);

  const handlePlusButtonClick = (): void => {
    if (ingredientName && amount) {
      setShowPlusIcon(false);
      onPlusButtonClick(currentIngredient.id, ingredientName, measurement?.value, amount);
    } else alert('not every field is complete!');
  };

  const plusButton = showPlusIcon ? (
    <StyledFontAwesomeIcon icon={faPlusCircle} onClick={() => handlePlusButtonClick()} />
  ) : null;
  const minusButton = showMinusIcon ? (
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
        {plusButton}
        {minusButton}
      </div>
    </StyledCreateIngredientItem>
  );
}
