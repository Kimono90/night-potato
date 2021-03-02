import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { IRouteParams } from 'src/models-and-constants/IRouteParams';
import RecipeInfoBlock from '../../components/recipe-info-block/recipe-info-block';
import { StyledRecipeSummaryPage } from './recipe-summary-page.styles';
import RecipeIngredientsBlock from '../../components/recipe-ingredients-block/recipe-ingredients-block';
import RecipeInstructionsBlock from '../../components/recipe-instructions-block/recipe-instructions-block';
import type { IRecipe } from '../../models-and-constants/IRecipe';

export default function RecipeSummaryPage() {
  let { recipeId } = useParams<IRouteParams>()

  useEffect(() => {
    //TODO: get recipe from recipeId
  }, []);

  const recipe: IRecipe = {
    id: 1,
    metaInfo: {
      name: 'Vegetarian Chickpea Curry',
      portions: 4,
      prepTimeInMinutes: 50,
      kcalPerPortion: 500,
      imgUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe'
    },
    ingredients: [],
    instructionSteps: []
  };

  return (
    <StyledRecipeSummaryPage data-label="summaryPage">
      <RecipeInfoBlock recipeMetaInfo={recipe.metaInfo} />
      <RecipeIngredientsBlock ingredients={recipe.ingredients} />
      <RecipeInstructionsBlock instructions={recipe.instructionSteps} />
    </StyledRecipeSummaryPage>
  );
}
