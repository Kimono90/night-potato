import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { IRouteParams } from 'src/models-and-constants/IRouteParams';
import MetaInfoBlock from '../../components/recipe-summary-page/recipe-info-block/meta-info-block';
import { StyledRecipeSummaryPage } from './recipe-summary-page.styles';
import IngredientsBlock from '../../components/recipe-summary-page/recipe-ingredients-block/ingredients-block';
import InstructionsBlock from '../../components/recipe-summary-page/recipe-instructions-block/instructions-block';
import type { IIngredient, IInstructionStep, IRecipe } from '../../models-and-constants/IRecipe';
import PhotoCarousel from '../../components/recipe-summary-page/recipe-photo-carousel/photo-carousel';
import { testRecipe1, testRecipe2, brazilianPudding } from '../../testRecipes';

export default function RecipeSummaryPage() {
  let { recipeId } = useParams<IRouteParams>();
  const [recipe, setRecipe] = useState<IRecipe | null>(null);

  useEffect(() => {
    const testRecipes = [testRecipe1, testRecipe2, brazilianPudding];
    const currentRecipe = testRecipes.find((r) => r.id === Number(recipeId));
    if (currentRecipe) {
      setRecipe(currentRecipe);
    }
  }, []);

  const handleIngredientChange = (newIngredients: IIngredient[]) => {
    if (!recipe) return;
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const handleInstructionChange = (newInstructions: IInstructionStep[]) => {
    if (!recipe) return;
    setRecipe({ ...recipe, instructionSteps: newInstructions });
  };

  const handlePortionsChange = (action: string) => {
    if (!recipe) return;
    let newPortions = recipe.metaInfo.portions;
    action === '+' ? newPortions++ : newPortions--;
    if (newPortions === 0) return;

    recalculateIngredientAmounts(newPortions);
    setRecipe({ ...recipe, metaInfo: { ...recipe.metaInfo, portions: newPortions } });
  };

  const recalculateIngredientAmounts = (newPortions: number) => {
    if (!recipe) return;
    recipe.ingredients.forEach((i) => (i.amount = (i.amount / recipe.metaInfo.portions) * newPortions));
  };

  if (!recipe) return <StyledRecipeSummaryPage data-label="empty-summary-page" />;

  return (
    <StyledRecipeSummaryPage data-label="summary-page">
      <MetaInfoBlock recipeMetaInfo={recipe.metaInfo} onChangePortions={handlePortionsChange} />
      {recipe.metaInfo.imgUrls.length ? <PhotoCarousel imgUrls={recipe.metaInfo.imgUrls} /> : null}
      {/*<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>*/}
      <IngredientsBlock ingredients={recipe.ingredients} equipment={recipe.equipment} />
      <InstructionsBlock instructions={recipe.instructionSteps} />
      {/*</div>*/}
    </StyledRecipeSummaryPage>
  );
}
