import React, { ReactElement, useState } from 'react';
import { StyledAddButton, StyledList, StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';
import type { IIngredient } from '../../../models-and-constants/IRecipe';
import { generate } from 'shortid';
import { EditableIngredient } from './editable-ingredient';
import { EditableIngredientMobile } from './editable-ingredient-mobile';
import { AddIngredientModal } from './add-ingredient-modal';

export function IngredientsInputField(): ReactElement {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const mobile = window.innerWidth < 500;

  const handleAddIngredient = (id: string, name: string, measurement: string, amount: number) => {
    const newIngredient: IIngredient = {
      id: id,
      productName: name,
      measurement,
      amount,
    };

    setIngredients([...ingredients, newIngredient]);
  };

  const handleRemoveIngredient = (ingredientId: string) => {
    const newIngredients = ingredients.filter((i: IIngredient) => i.id !== ingredientId);
    setIngredients(newIngredients);
  };

  const renderIngredients = () => {
    if (mobile) {
      const ingredientsToRender = ingredients.map((i: IIngredient) => (
        <EditableIngredientMobile key={i.id} ingredient={i} onRemoveClick={handleRemoveIngredient} />
      ));
      return (
        <>
          {ingredientsToRender}
          {mobile ? <StyledAddButton onClick={() => setShowModal(true)}>Add</StyledAddButton> : null}
        </>
      );
    }

    const emptyIngredient: IIngredient = { id: generate(), amount: 0, measurement: '', productName: '' };
    const ingredientsToRender: IIngredient[] = [...ingredients, emptyIngredient];

    return ingredientsToRender.map((i, index) => (
      <EditableIngredient
        key={i.id}
        currentIngredient={i}
        onPlusButtonClick={handleAddIngredient}
        onMinusButtonClick={handleRemoveIngredient}
        ingredients={ingredients}
      />
    ));
  };

  return (
    <>
      <StyledSummaryCard data-label="summary-card">
        <StyledTitle data-label="title">Ingredients</StyledTitle>
        <StyledList>{renderIngredients()}</StyledList>
      </StyledSummaryCard>
      <AddIngredientModal
        showModal={showModal}
        onIngredientAdd={(id, name, measurement, amount) => {
          setShowModal(false);
          handleAddIngredient(id, name, measurement, amount);
        }}
        onBackClick={() => setShowModal(false)}
      />
    </>
  );
}
