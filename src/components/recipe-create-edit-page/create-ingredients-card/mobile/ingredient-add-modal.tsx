import React, { ChangeEvent, ReactElement, useState } from 'react';
import { MEASUREMENT_OPTIONS } from '../../../../models-and-constants/measurement-options';
import { generate } from 'shortid';
import { AddItemModalWrapper } from '../../template-components/add-item-modal-mobile/add-item-modal-wrapper';
import { StyledNumericField, StyledSelectField, StyledTextField } from '../../../shared-styles/shared-styles';
import type { IIngredient } from '../../../../models-and-constants/IRecipe';

type Props = {
  showModal: boolean;
  onIngredientAdd: (ingredient: IIngredient) => void;
  onBackClick: () => void;
};

export function IngredientAddModal({ showModal, onIngredientAdd, onBackClick }: Props): ReactElement {
  const [ingredient, setIngredient] = useState<IIngredient>({
    id: '',
    name: '',
    amount: 0,
    measurement: '',
  });
  const [ingredientHasError, setIngredientHasError] = useState<boolean>(false);
  const [amountHasError, setAmountHasError] = useState<boolean>(false);

  const resetFields = () => {
    setIngredient({
      id: '',
      name: '',
      amount: 0,
      measurement: '',
    });
    setIngredientHasError(false);
    setAmountHasError(false);
  };

  const handleCheckButtonClick = () => {
    if (ingredient.name && ingredient.amount) {
      onIngredientAdd({
        id: generate(),
        amount: ingredient.amount,
        name: ingredient.name,
        measurement: ingredient.measurement,
      });
      resetFields();
    } else {
      setAmountHasError(!ingredient.amount);
      setIngredientHasError(!ingredient.name);
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
        value={ingredient.name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setIngredient({ ...ingredient, name: event.target.value })}
        hasError={`${ingredientHasError}`}
      />
      <StyledNumericField
        placeholder="Amount"
        type="number"
        value={ingredient.amount}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setIngredient({ ...ingredient, amount: Number(event.target.value) })
        }
        hasError={`${amountHasError}`}
      />
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <StyledSelectField
          value={ingredient.measurement}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setIngredient({ ...ingredient, measurement: e.target.value })}
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
