import React from 'react';
import { useParams } from 'react-router-dom';
import type { IRouteParams } from 'src/models-and-constants/IRouteParams';
import RecipeInfoBlock from '../../components/recipe-info-block/recipe-info-block';
import './recipe-summary-page.scss';

export default function RecipeSummaryPage() {
  let { recipeId } = useParams<IRouteParams>();

  return (
    <div className="summaryPage">
      <RecipeInfoBlock recipeId={Number(recipeId)} />
    </div>
  );
}
