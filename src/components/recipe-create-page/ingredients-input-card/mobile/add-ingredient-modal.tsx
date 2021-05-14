import React, { ChangeEvent, ReactElement, useState } from 'react';
import { MEASUREMENT_OPTIONS } from '../../../../models-and-constants/measurement-options';
import { generate } from 'shortid';
import { AddItemModalWrapper } from '../../add-item-modal-mobile/add-item-modal-wrapper';
import { StyledNumericField, StyledSelectField, StyledTextField } from '../../../shared-styles/shared-styles';
import type { IIngredient } from '../../../../models-and-constants/IRecipe';

type Props = {
  currentIngredient: IIngredient | null;
  showModal: boolean;
  onIngredientAdd: (ingredient: IIngredient) => void;
  onIngredientChange: (ingredient: IIngredient) => void;
  onBackClick: () => void;
};

export function AddIngredientModal({
  currentIngredient,
  showModal,
  onIngredientAdd,
  onIngredientChange,
  onBackClick,
}: Props): ReactElement {
  const [ingredient, setIngredient] = useState<IIngredient>(
    currentIngredient || {
      id: '',
      productName: '',
      amount: 0,
      measurement: '',
    },
  );
  const [ingredientHasError, setIngredientHasError] = useState<boolean>(false);
  const [amountHasError, setAmountHasError] = useState<boolean>(false);

  const resetFields = () => {
    setIngredient({
      id: '',
      productName: '',
      amount: 0,
      measurement: '',
    });
    setIngredientHasError(false);
    setAmountHasError(false);
  };

  const addOrChangeIngredient = () => {
    if (currentIngredient) {
      onIngredientChange({
        id: currentIngredient.id,
        amount: ingredient.amount,
        productName: ingredient.productName,
        measurement: ingredient.measurement,
      });
    } else {
      onIngredientAdd({
        id: generate(),
        amount: ingredient.amount,
        productName: ingredient.productName,
        measurement: ingredient.measurement,
      });
    }
  };

  const handleCheckButtonClick = () => {
    if (ingredient.productName && ingredient.amount) {
      addOrChangeIngredient();
      resetFields();
    } else {
      setAmountHasError(!ingredient.amount);
      setIngredientHasError(!ingredient.productName);
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
        value={ingredient.productName}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setIngredient({ ...ingredient, productName: event.target.value })
        }
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
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setIngredient({ ...ingredient, measurement: e.target.value })
          }
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
