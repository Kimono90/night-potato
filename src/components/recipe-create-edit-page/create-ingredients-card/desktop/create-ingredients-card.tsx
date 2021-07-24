import React, { ReactElement, useState } from 'react';
import type { IIngredient } from '../../../../models-and-constants/IRecipe';
import { CreateItemsCard } from '../../template-components/create-items-card/create-items-card';
import { IngredientList } from './ingredient-list';
import { generate } from 'shortid';

type Props = {
  ingredients: IIngredient[];
  onIngredientsChange: (ingredients: IIngredient[]) => void;
  ingredientsWithError: string[];
};

export function CreateIngredientsCard({ ingredients, ingredientsWithError, onIngredientsChange }: Props): ReactElement {
  const handleRemoveIngredient = (ingredientId: string) => {
    const newIngredients = ingredients.filter((i: IIngredient) => i.ingredientId !== ingredientId);
    onIngredientsChange(newIngredients);
  };

  const handleChangeIngredient = (changedIngredient: IIngredient) => {
    const changedIngredientIndex = ingredients.findIndex((i) => i.ingredientId === changedIngredient.ingredientId);
    const ingredientsCopy = [...ingredients];
    ingredientsCopy[changedIngredientIndex] = changedIngredient;
    onIngredientsChange(ingredientsCopy);
  };

  const handleAddIngredient = () => {
    onIngredientsChange([...ingredients, { ingredientId: generate(), amount: 0, measurement: '', name: '' }]);
  };

  return (
    <CreateItemsCard
      cardTitle="Ingredients"
      itemsToRender={
        <IngredientList
          currentIngredients={ingredients}
          onIngredientRemove={handleRemoveIngredient}
          onIngredientChange={handleChangeIngredient}
          onIngredientAdd={handleAddIngredient}
          ingredientsWithError={ingredientsWithError}
        />
      }
    />
  );
}
