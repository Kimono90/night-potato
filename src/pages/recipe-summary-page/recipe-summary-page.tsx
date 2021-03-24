import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { IRouteParams } from 'src/models-and-constants/IRouteParams';
import MetaInfoBlock from '../../components/recipe-info-block/meta-info-block';
import { StyledRecipeSummaryPage } from './recipe-summary-page.styles';
import IngredientsBlock from '../../components/recipe-ingredients-block/ingredients-block';
import InstructionsBlock from '../../components/recipe-instructions-block/instructions-block';
import type { IIngredient, IInstructionStep, IRecipe } from '../../models-and-constants/IRecipe';
import PhotoCarousel from '../../components/recipe-photo-carousel/photo-carousel';
import { testRecipe1, testRecipe2 } from '../../testRecipes';

export default function RecipeSummaryPage() {
  let { recipeId } = useParams<IRouteParams>()
  const [recipe, setRecipe] = useState<IRecipe>(testRecipe1);

  useEffect(() => {
    const testRecipes = [testRecipe1, testRecipe2]
    const currentRecipe = testRecipes.find((r) => r.id === Number(recipeId))
    if (currentRecipe) {
      setRecipe(currentRecipe)
    }
  }, []);

  const handleIngredientChange = (newIngredients: IIngredient[]) => {
    console.log(newIngredients);
    setRecipe({...recipe, ingredients: newIngredients})
  }

  const handleInstructionChange = (newInstructions: IInstructionStep[]) => {
    console.log(newInstructions);
    setRecipe({...recipe, instructionSteps: newInstructions})
  }

  const handlePortionsChange = (action: string) => {
    console.log(action);
    let newPortions = recipe.metaInfo.portions;
    action === '+' ? newPortions++ : newPortions--;
    if (newPortions === 0) return;

    recalculateIngredientAmounts(newPortions);
    setRecipe({...recipe, metaInfo: { ...recipe.metaInfo, portions: newPortions}})
  }

  const recalculateIngredientAmounts = (newPortions: number) => {
    recipe.ingredients.forEach((i) => i.amount = i.amount / recipe.metaInfo.portions * newPortions)
  }

  if (recipe) {
    return (
      <StyledRecipeSummaryPage data-label="summaryPage">
        <MetaInfoBlock recipeMetaInfo={recipe.metaInfo} onChangePortions={handlePortionsChange} />
        {recipe.metaInfo.imgUrls.length ? <PhotoCarousel imgUrls={recipe.metaInfo.imgUrls} /> : null}
        {/*<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>*/}
          <IngredientsBlock ingredients={recipe.ingredients} equipment={recipe.equipment} onIngredientChange={handleIngredientChange} />
          <InstructionsBlock instructions={recipe.instructionSteps} onInstructionChange={handleInstructionChange} />
        {/*</div>*/}
      </StyledRecipeSummaryPage>
    );
  }
  return null;
}
