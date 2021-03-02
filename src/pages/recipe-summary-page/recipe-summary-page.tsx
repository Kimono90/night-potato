import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { IRouteParams } from 'src/models-and-constants/IRouteParams';
import MetaInfoBlock from '../../components/recipe-info-block/meta-info-block';
import { StyledRecipeSummaryPage } from './recipe-summary-page.styles';
import IngredientsBlock from '../../components/recipe-ingredients-block/ingredients-block';
import InstructionsBlock from '../../components/recipe-instructions-block/instructions-block';
import type { IIngredient, IRecipe } from '../../models-and-constants/IRecipe';

const r: IRecipe = {
  id: 1,
  metaInfo: {
    name: 'Vegetarian Chickpea Curry',
    portions: 4,
    prepTimeInMinutes: 50,
    kcalPerPortion: 500,
    imgUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe'
  },
  ingredients: [{ product: 'chickpeas', amount: 500, measurement: 'gram', isChecked: false },
    { product: 'tomato sauce', amount: 200, measurement: 'ml', isChecked: true}],
  instructionSteps: [{stepNr: 1, stepDescription: 'Buy the flour', isChecked: false}]
};

export default function RecipeSummaryPage() {
  let { recipeId } = useParams<IRouteParams>()
  const [recipe, setRecipe] = useState<IRecipe>(r);

  useEffect(() => {
    //TODO: get recipe from recipeId
    setRecipe(r)
  }, []);

  const handleIngredientChange = (newIngredients: IIngredient[]) => {
    console.log(newIngredients);
    setRecipe({...recipe, ingredients: newIngredients})
  }

  if (recipe) {
    return (
      <StyledRecipeSummaryPage data-label="summaryPage">
        <MetaInfoBlock recipeMetaInfo={recipe.metaInfo} />
        <IngredientsBlock ingredients={recipe.ingredients} onIngredientChange={handleIngredientChange} />
        <InstructionsBlock instructions={recipe.instructionSteps} />
      </StyledRecipeSummaryPage>
    );
  }
  return null;
}
