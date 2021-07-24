import React, { ChangeEvent, useEffect, useState } from 'react';
import OverviewCard from '../../components/recipe-overview-page/recipe-overview-card/overview-card';
import { StyledRecipeOverviewPage, StyledRecipeResults, StyledSearchBox } from './recipe-overview-page.styles';
import type { IRecipe } from '../../models-and-constants/IRecipe';
import { testRecipe1, testRecipe2, brazilianPudding, testRecipeFinal } from '../../testRecipes';
import { getAllRecipes } from '../../gateways/night-potato-api-gateway';

export default function RecipeOverviewPage() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [recipesToDisplay, setRecipesToDisplay] = useState<IRecipe[]>([]);

  useEffect(() => {
    getAllRecipes().then((recipes) => console.log(recipes));

    setRecipes([testRecipe1, testRecipe2, brazilianPudding, testRecipeFinal]);
    setRecipesToDisplay([testRecipe1, testRecipe2, brazilianPudding, testRecipeFinal]);
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value;
    const recipesCopy = [...recipes];
    const filteredRecipes = recipesCopy.filter((r) => r.metaInfo.name.toLowerCase().includes(searchInput.toLowerCase()));
    setRecipesToDisplay(filteredRecipes);
  };

  const recipeElements = recipesToDisplay.map((r) => (
    <OverviewCard key={r.recipeId} recipeId={r.recipeId} recipeInfo={r.metaInfo} />
  ));

  return (
    <StyledRecipeOverviewPage data-label="overview-page">
      <StyledSearchBox placeholder="Search for a recipe..." onChange={handleSearch} />
      <StyledRecipeResults>{recipeElements}</StyledRecipeResults>
    </StyledRecipeOverviewPage>
  );
}
