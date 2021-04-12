import { StyledRecipeSummaryPage } from '../recipe-summary-page/recipe-summary-page.styles';
import React from 'react';
import { RecipeName } from '../../components/recipe-create-page/recipe-name/recipe-name';

export function RecipeCreatePage() {
  return (
    <StyledRecipeSummaryPage data-label="create-recipe-page">
      <RecipeName />
    </StyledRecipeSummaryPage>
  );
}
