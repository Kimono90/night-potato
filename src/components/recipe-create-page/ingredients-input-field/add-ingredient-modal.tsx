import React, { ReactElement, useState } from 'react';
import {
  StyledAddIngredientModal,
  StyledAmountField,
  StyledIngredientField,
  StyledSelectField,
} from './ingredients-input-field.styles';
import { MEASUREMENT_OPTIONS } from '../../../models-and-constants/measurement-options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { generate } from 'shortid';

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
    <StyledAddIngredientModal show={`${showModal}`}>
      <h2 style={{ alignSelf: 'center' }}>Add an ingredient</h2>
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
        <StyledSelectField placeholder="" onChange={(e) => setMeasurement(e.target.value)}>
          {MEASUREMENT_OPTIONS.map((o) => (
            <option>{o}</option>
          ))}
        </StyledSelectField>
        <p style={{ marginLeft: '1rem' }}>
          <i>optional</i>
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: '2rem',
          width: '100%',
          justifyContent: 'space-evenly',
          marginTop: '6rem',
        }}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ color: 'dodgerblue' }}
          onClick={() => {
            onBackClick();
            resetFields();
          }}
        />
        <FontAwesomeIcon icon={faCheck} style={{ color: 'limegreen' }} onClick={() => handleCheckButtonClick()} />
      </div>
    </StyledAddIngredientModal>
  );
}
