import { StyledRecipeSummaryPage } from '../recipe-summary-page/recipe-summary-page.styles';
import React, { useState } from 'react';
import { RecipeNameField } from '../../components/recipe-create-page/recipe-name/recipe-name-field';

export function RecipeCreatePage() {
  const [recipeNameHasError, setRecipeNameHasError] = useState<boolean>();

  return (
    <StyledRecipeSummaryPage data-label="create-recipe-page">
      <RecipeNameField onRecipeNameHasError={setRecipeNameHasError} />
    </StyledRecipeSummaryPage>
  );
}
