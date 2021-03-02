import React from 'react';
import { useParams } from 'react-router-dom';
import type { IRouteParams } from 'src/models-and-constants/IRouteParams';
import RecipeInfoBlock from '../../components/recipe-info-block/recipe-info-block';
import { StyledRecipeSummaryPage } from './recipe-summary-page.styles';

export default function RecipeSummaryPage() {
  let { recipeId } = useParams<IRouteParams>();

  return (
    <StyledRecipeSummaryPage data-label="summaryPage">
      <RecipeInfoBlock recipeId={Number(recipeId)} />
    </StyledRecipeSummaryPage>
  );
}
