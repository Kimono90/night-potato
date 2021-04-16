import React, { ReactElement, useState } from 'react';
import { StyledList, StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';
import { Ingredient } from './ingredient';
import type { IIngredient } from '../../../models-and-constants/IRecipe';

export function IngredientsInputField(): ReactElement {
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);

  const generateUniqueId = (): number => {
    let id = 1;
    if (ingredients.length) {
      const ids = ingredients.flatMap((i) => i.id);
      id = Math.max(...ids) + 1;
    }

    return id;
  };

  const renderIngredients = () => {
    console.log(ingredients);
    const emptyIngredient: IIngredient = { id: generateUniqueId(), amount: 0, measurement: '', productName: '' };
    const ingredientsToRender: IIngredient[] = [...ingredients, emptyIngredient];

    return ingredientsToRender.map((i) => (
      <Ingredient
        key={i.id}
        currentIngredient={i}
        onPlusButtonClick={handleAddIngredient}
        onMinusButtonClick={handleRemoveIngredient}
        ingredients={ingredients}
      />
    ));
  };

  const handleAddIngredient = (name: string, measurement: string, amount: number) => {
    const newIngredient: IIngredient = {
      id: generateUniqueId(),
      productName: name,
      measurement,
      amount,
    };

    setIngredients([...ingredients, newIngredient]);
  };

  const handleRemoveIngredient = (ingredientId: number) => {
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
