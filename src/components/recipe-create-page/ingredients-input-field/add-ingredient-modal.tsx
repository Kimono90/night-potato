import React, { ReactElement, useState } from 'react';
import { StyledAmountField, StyledIngredientField, StyledSelectField } from './ingredients-input-field.styles';
import { MEASUREMENT_OPTIONS } from '../../../models-and-constants/measurement-options';
import { generate } from 'shortid';
import { AddItemModalWrapper } from '../add-item-modal-mobile/add-item-modal-wrapper';

type Props = {
  showModal: boolean;
  onIngredientAdd: (id: string, name: string, measurement: string, amount: number) => void;
  onBackClick: () => void;
};

export function AddIngredientModal({ showModal, onIngredientAdd, onBackClick }: Props): ReactElement {
  const [ingredientName, setIngredientName] = useState<string>('');
  const [amount, setAmount] = useState<number | ''>('');
  const [measurement, setMeasurement] = useState<string>('');

  const resetFields = () => {
    setIngredientName('');
    setAmount('');
    setMeasurement('');
  };

  const handleCheckButtonClick = () => {
    if (ingredientName && amount) {
      onIngredientAdd(generate(), ingredientName, measurement, amount);
      resetFields();
    } else alert('not every field is complete!');
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
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <StyledSelectField value={measurement} onChange={(e) => setMeasurement(e.target.value)}>
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
