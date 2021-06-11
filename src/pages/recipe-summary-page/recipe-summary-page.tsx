import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { IRouteParams } from 'src/models-and-constants/IRouteParams';
import MetaInfoBlock from '../../components/recipe-summary-page/recipe-info-block/meta-info-block';
import { StyledSingleRecipePage } from './recipe-summary-page.styles';
import IngredientsBlock from '../../components/recipe-summary-page/recipe-ingredients-block/ingredients-block';
import InstructionsBlock from '../../components/recipe-summary-page/recipe-instructions-block/instructions-block';
import type { IIngredient, IRecipe } from '../../models-and-constants/IRecipe';
import PhotoCarousel from '../../components/recipe-summary-page/recipe-photo-carousel/photo-carousel';
import { testRecipe1, testRecipe2, brazilianPudding } from '../../testRecipes';

export default function RecipeSummaryPage() {
  let { recipeId } = useParams<IRouteParams>();
  const [recipe, setRecipe] = useState<IRecipe | null>(null);
  const testRecipes = [testRecipe1, testRecipe2, brazilianPudding];

  useEffect(() => {
    const currentRecipe = testRecipes.find((r) => r.id === Number(recipeId));
    if (currentRecipe) {
      setRecipe(currentRecipe);
    }
  }, []);

  const handleIngredientChange = (newIngredients: IIngredient[]) => {
    if (!recipe) return;
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const handleInstructionChange = (newInstructions: string) => {
    if (!recipe) return;
    setRecipe({ ...recipe, instructions: newInstructions });
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

  if (!recipe) return <StyledSingleRecipePage data-testid="empty-summary-page" />;

  return (
    <StyledSingleRecipePage data-testid="summary-page">
      <MetaInfoBlock recipeMetaInfo={recipe.metaInfo} onChangePortions={handlePortionsChange} />
      {recipe.metaInfo.imgUrls.length ? <PhotoCarousel data-testid="photo-carousel" imgUrls={recipe.metaInfo.imgUrls} /> : null}
      {/*<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>*/}
      <IngredientsBlock data-testid="ingredients-block" ingredients={recipe.ingredients} equipment={recipe.equipment} />
      <InstructionsBlock data-testid="instructions-block" instructions={recipe.instructions} />
      {/*</div>*/}
    </StyledSingleRecipePage>
  );
}
