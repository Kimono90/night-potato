import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { IRouteParams } from 'src/models-and-constants/IRouteParams';
import MetaInfoBlock from '../../components/recipe-info-block/meta-info-block';
import { StyledRecipeSummaryPage } from './recipe-summary-page.styles';
import IngredientsBlock from '../../components/recipe-ingredients-block/ingredients-block';
import InstructionsBlock from '../../components/recipe-instructions-block/instructions-block';
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
    ingredients: [{ product: 'chickpeas', amount: 500, measurement: 'gram' },
      { product: 'tomato sauce', amount: 200, measurement: 'ml'}],
    instructionSteps: [{stepNr: 1, stepDescription: 'Buy the flour', isDone: false}]
  };

  return (
    <StyledRecipeSummaryPage data-label="summaryPage">
      <MetaInfoBlock recipeMetaInfo={recipe.metaInfo} />
      <IngredientsBlock ingredients={recipe.ingredients} />
      <InstructionsBlock instructions={recipe.instructionSteps} />
    </StyledRecipeSummaryPage>
  );
}
