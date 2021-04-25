import React, { ReactElement, useState } from 'react';
import { StyledList, StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';
import type { IIngredient } from '../../../models-and-constants/IRecipe';
import { generate } from 'shortid';
import { EditableIngredient } from './editable-ingredient';
import { EditableIngredientMobile } from './editable-ingredient-mobile';
import { StyledAddButton } from './ingredients-input-field.styles';

export function IngredientsInputField(): ReactElement {
  const [ingredients, setIngredients] = useState<IIngredient[]>([
    { id: '1', productName: 'very condensed milk', amount: 500, measurement: 'ml' },
    { id: '1', productName: 'shredded coconut', amount: 300, measurement: 'gr' },
  ]);
  const mobile = window.innerWidth < 500;

  const renderIngredients = () => {
    if (mobile) {
      const ingredientsToRender = ingredients.map((i) => <EditableIngredientMobile ingredient={i} />);
      return (
        <>
          {ingredientsToRender}
          {mobile ? <StyledAddButton>Add</StyledAddButton> : null}
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
    const newIngredients = ingredients.filter((i) => i.id !== ingredientId);
    setIngredients(newIngredients);
  };

  return (
    <StyledSummaryCard data-label="summary-card">
      <StyledTitle data-label="title">Ingredients</StyledTitle>
      <StyledList>{renderIngredients()}</StyledList>
    </StyledSummaryCard>
  );
}
