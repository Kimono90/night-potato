import React, { ReactElement, useState } from 'react';
import { StyledList, StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';
import { Ingredient } from './ingredient';
import type { IIngredient } from '../../../models-and-constants/IRecipe';

export function IngredientsInputField(): ReactElement {
// + icon can only show when line is completely filled in
// - icon can only show when there is at least 2 ingredients (1 ingredient is mandatory)
// when there is 1 ingredient only the + button is available

  const [ingredients, setIngredients] = useState<IIngredient[]>([]);

  const renderIngredients = () => {
    console.log(ingredients);
    const emptyIngredient: IIngredient = {id: 0, amount: 0, measurement: '', productName: ''};
    const ingredientsToRender: IIngredient[] = [...ingredients, emptyIngredient];

    return ingredientsToRender.map((i) =>
      <Ingredient
        key={i.id}
        currentIngredient={i}
        showMinusIcon={true}
        showPlusIcon={true}
        onPlusButtonClick={handleAddIngredient}
        onMinusButtonClick={handleRemoveIngredient}
      />)
  }

  const handleAddIngredient = (name: string, measurement: string, amount: number) => {
    let id = 1;
    if (ingredients.length) {
      const ids = ingredients.flatMap((i) => i.id);
      id = Math.max(...ids) + 1;
    }

    const newIngredient: IIngredient = {
      id: id,
      productName: name,
      measurement,
      amount,
    }

    setIngredients([...ingredients, newIngredient])
  }

  const handleRemoveIngredient = (ingredientId: number) => {
    const newIngredients = ingredients.filter((i) => i.id !== ingredientId);
    setIngredients(newIngredients);
  }


  return(
    <StyledSummaryCard data-label="summary-card">
      <StyledTitle data-label="title">Ingredients</StyledTitle>
      <StyledList>
        {renderIngredients()}
      </StyledList>
    </StyledSummaryCard>
    )
}
