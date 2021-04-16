import React, { ReactElement, useState } from 'react';
import {
  StyledAmountField,
  StyledCreateIngredientItem, StyledFontAwesomeIcon,
  StyledIngredientField,
  StyledSelectField,
} from './ingredients-input-field.styles';
import { MEASUREMENT_OPTIONS } from '../../../models-and-constants/MEASUREMENT_OPTIONS';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import type { IIngredient } from '../../../models-and-constants/IRecipe';

type Props = {
  currentIngredient: IIngredient;
  showPlusIcon: boolean;
  onPlusButtonClick: (name: string, measurement: string, amount: number) => void;
  onMinusButtonClick: (id: number) => void;
  showMinusIcon: boolean;
}

export function Ingredient({currentIngredient, showPlusIcon, onPlusButtonClick, showMinusIcon, onMinusButtonClick}: Props): ReactElement {
  const [ingredientName, setIngredientName] = useState<string>('');
  const [amount, setAmount] = useState<number>();
  const [measurement, setMeasurement] = useState<string>('');

  const handlePlusButtonClick = (): void => {
    if (ingredientName && amount && measurement) {
      onPlusButtonClick(ingredientName, measurement, amount)
    }
    else alert('not every field is complete!')
  }

  const plusButton = showPlusIcon ? <StyledFontAwesomeIcon icon={faPlusCircle} onClick={() => handlePlusButtonClick()}/> : null;
  const minusButton = showMinusIcon ? <StyledFontAwesomeIcon icon={faMinusCircle} onClick={() => onMinusButtonClick(currentIngredient.id)}/> : null;

  return (
    <StyledCreateIngredientItem>
      <StyledIngredientField placeholder="Ingredient name" value={ingredientName} onChange={(event) => setIngredientName(event.target.value)}/>
      <StyledAmountField placeholder="Amount" type="number" value={amount} onChange={(event) => setAmount(Number(event.target.value))}/>
      <StyledSelectField placeholder="Measurement" value={measurement} onChange={(event) => setMeasurement(event.target.value)}>
        {MEASUREMENT_OPTIONS.map(mo => <option>{mo}</option>)}
      </StyledSelectField>
      <div style={{minWidth: '5rem'}}>
        {plusButton}
        {minusButton}
      </div>
    </StyledCreateIngredientItem>
  )
}
