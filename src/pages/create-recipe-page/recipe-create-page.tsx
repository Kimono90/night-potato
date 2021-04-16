import { StyledSingleRecipePage } from '../recipe-summary-page/recipe-summary-page.styles';
import React, { useState } from 'react';
import { RecipeNameInputField } from '../../components/recipe-create-page/recipe-name-input-field/recipe-name-input-field';
import { IngredientsInputField } from '../../components/recipe-create-page/ingredients-input-field/ingredients-input-field';

export function RecipeCreatePage() {
  const [recipeNameHasError, setRecipeNameHasError] = useState<boolean>();

  return (
    <StyledSingleRecipePage data-label="create-recipe-page">
      <RecipeNameInputField onRecipeNameHasError={setRecipeNameHasError} />
      <IngredientsInputField />
    </StyledSingleRecipePage>
  );
}
