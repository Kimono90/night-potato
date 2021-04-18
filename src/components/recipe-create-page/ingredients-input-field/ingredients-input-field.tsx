import React, { ReactElement, useState } from 'react';
import { StyledList, StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';
import { Ingredient } from './ingredient';
import type { IIngredient } from '../../../models-and-constants/IRecipe';
import { generate } from 'shortid';

export function IngredientsInputField(): ReactElement {
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);

  const renderIngredients = () => {
    const emptyIngredient: IIngredient = { id: generate(), amount: 0, measurement: '', productName: '' };
    const ingredientsToRender: IIngredient[] = [...ingredients, emptyIngredient];

    return ingredientsToRender.map((i, index) => (
      <Ingredient
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
