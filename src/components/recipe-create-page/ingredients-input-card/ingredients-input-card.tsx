import React, { ReactElement, useState } from 'react';
import type { IIngredient } from '../../../models-and-constants/IRecipe';
import { CreateItemsCard } from '../create-items-card/create-items-card';
import { IngredientList } from './ingredient-list';
import { generate } from 'shortid';

export function IngredientsInputCard(): ReactElement {
  const [ingredients, setIngredients] = useState<IIngredient[]>([
    { id: generate(), amount: 0, measurement: '', productName: '' },
  ]);

  const handleRemoveIngredient = (ingredientId: string) => {
    const newIngredients = ingredients.filter((i: IIngredient) => i.id !== ingredientId);
    setIngredients(newIngredients);
  };

  const handleChangeIngredient = (changedIngredient: IIngredient) => {
    console.log('changing ingredient');
    console.log('ID', changedIngredient.id);
    const changedIngredientIndex = ingredients.findIndex((i) => i.id === changedIngredient.id);
    console.log('index of ingredient', changedIngredientIndex);
    const ingredientsCopy = [...ingredients];
    ingredientsCopy[changedIngredientIndex].amount = changedIngredient.amount;
    ingredientsCopy[changedIngredientIndex].productName = changedIngredient.productName;
    ingredientsCopy[changedIngredientIndex].measurement = changedIngredient.measurement;
    console.log('new ingredient state', ingredientsCopy);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { id: generate(), amount: 0, measurement: '', productName: '' }]);
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
