import React from 'react';
import '../recipe-overview-page/recipe-overview-page.scss';
import RecipeSummaryTile from '../../components/recipe-summary-tile/recipe-summary-tile';

export default function RecipeOverviewPage() {
  return (
    <div className="overview-page">
      <h1>Recipes</h1>
      <RecipeSummaryTile />
    </div>
  );
}
