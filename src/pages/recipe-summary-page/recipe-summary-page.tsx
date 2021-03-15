import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { IRouteParams } from 'src/models-and-constants/IRouteParams';
import MetaInfoBlock from '../../components/recipe-info-block/meta-info-block';
import { StyledRecipeSummaryPage } from './recipe-summary-page.styles';
import IngredientsBlock from '../../components/recipe-ingredients-block/ingredients-block';
import InstructionsBlock from '../../components/recipe-instructions-block/instructions-block';
import type { IIngredient, IInstructionStep, IRecipe } from '../../models-and-constants/IRecipe';
import PhotoCarousel from '../../components/recipe-photo-carousel/photo-carousel';
import { testImg1, testImg2, testImg3 } from '../../testImgs';

const r: IRecipe = {
  id: 1,
  metaInfo: {
    name: 'Vegetarian Chickpea Curry',
    portions: 4,
    prepTimeInMinutes: 50,
    kcalPerPortion: 500,
    imgUrls: [testImg1,testImg2, testImg3]
  },
  ingredients: [
    { id: 1, product: 'Chickpeas', amount: 500, measurement: 'gram', isChecked: true },
    { id: 2, product: 'Coconut milk', amount: 250, measurement: 'ml', isChecked: false },
    { id: 3, product: 'Low-sodium chicken broth and a lot of other stuff', amount: 200, measurement: 'ml', isChecked: false}],
  instructionSteps: [
    {stepNr: 2, stepDescription: 'Cut the stuff', isChecked: false},
    {stepNr: 1, stepDescription: 'Buy the stuff', isChecked: true},
    {stepNr: 3, stepDescription: 'Cook the stuff', isChecked: false}]
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
        <PhotoCarousel imgUrls={recipe.metaInfo.imgUrls} />
        <IngredientsBlock ingredients={recipe.ingredients} onIngredientChange={handleIngredientChange} />
        <InstructionsBlock instructions={recipe.instructionSteps} onInstructionChange={handleInstructionChange} />
      </StyledRecipeSummaryPage>
    );
  }
  return null;
}
