import React, { ReactElement, useState } from 'react';
import type { IIngredient } from '../../../../models-and-constants/IRecipe';
import { CreateItemsCard } from '../../template-components/create-items-card/create-items-card';
import { IngredientList } from './ingredient-list';
import { generate } from 'shortid';

export function CreateIngredientsCard(): ReactElement {
  const [ingredients, setIngredients] = useState<IIngredient[]>([{ id: generate(), amount: 0, measurement: '', name: '' }]);

  const handleRemoveIngredient = (ingredientId: string) => {
    const newIngredients = ingredients.filter((i: IIngredient) => i.id !== ingredientId);
    setIngredients(newIngredients);
  };

  const handleChangeIngredient = (changedIngredient: IIngredient) => {
    const changedIngredientIndex = ingredients.findIndex((i) => i.id === changedIngredient.id);
    const ingredientsCopy = [...ingredients];
    ingredientsCopy[changedIngredientIndex] = changedIngredient;
    setIngredients(ingredientsCopy);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { id: generate(), amount: 0, measurement: '', name: '' }]);
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
        />
      }
    />
  );
}
