import React, { ChangeEvent, ReactElement, useState } from 'react';
import { MEASUREMENT_OPTIONS } from '../../../models-and-constants/measurement-options';
import { generate } from 'shortid';
import { AddItemModalWrapper } from '../add-item-modal-mobile/add-item-modal-wrapper';
import { StyledNumericField, StyledSelectField, StyledTextField } from '../../shared-styles/shared-styles';

type Props = {
  showModal: boolean;
  onIngredientAdd: (id: string, name: string, measurement: string, amount: number) => void;
  onBackClick: () => void;
};

export function AddIngredientModal({ showModal, onIngredientAdd, onBackClick }: Props): ReactElement {
  const [ingredientName, setIngredientName] = useState<string>('');
  const [ingredientHasError, setIngredientHasError] = useState<boolean>(false);
  const [amount, setAmount] = useState<number | ''>('');
  const [amountHasError, setAmountHasError] = useState<boolean>(false);
  const [measurement, setMeasurement] = useState<string>('');

  const resetFields = () => {
    setIngredientName('');
    setAmount('');
    setMeasurement('');
    setIngredientHasError(false);
    setAmountHasError(false);
  };

  const handleCheckButtonClick = () => {
    if (ingredientName && amount) {
      onIngredientAdd(generate(), ingredientName, measurement, amount);
      resetFields();
    } else {
      setAmountHasError(!amount);
      setIngredientHasError(!ingredientName);
    }
  };

  return (
    <AddItemModalWrapper
      showModal={showModal}
      modalTitle="Add an ingredient"
      onBackClick={() => {
        onBackClick();
        resetFields();
      }}
      onCheckButtonClick={() => handleCheckButtonClick()}
    >
      <StyledTextField
        placeholder="Ingredient name"
        value={ingredientName}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setIngredientName(event.target.value)}
        hasError={`${ingredientHasError}`}
      />
      <StyledNumericField
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setAmount(Number(event.target.value))}
        hasError={`${amountHasError}`}
      />
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <StyledSelectField
          value={measurement}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setMeasurement(e.target.value)}
        >
          {MEASUREMENT_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </StyledSelectField>
        <p style={{ marginLeft: '1rem' }}>
          <i>optional</i>
        </p>
      </div>
    </AddItemModalWrapper>
  );
}
