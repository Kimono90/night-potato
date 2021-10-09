import React, { ChangeEvent, useEffect, useState } from 'react';
import OverviewCard from '../../components/recipe-overview-page/recipe-overview-card/overview-card';
import { StyledRecipeOverviewPage, StyledRecipeResults, StyledSearchBox } from './recipe-overview-page.styles';
import type { IRecipe } from '../../models-and-constants/IRecipe';
import { getAllRecipes } from '../../gateways/night-potato-api-gateway';
import { LoadingPage } from '../loading-page/loading-page';

export default function RecipeOverviewPage() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [recipesToDisplay, setRecipesToDisplay] = useState<IRecipe[]>([]);

  useEffect(() => {
    getAllRecipes()
      .then((result) => {
        const recipes = result.data.map((item) => item.recipe);
        setRecipes(recipes);
        setRecipesToDisplay(recipes);
      })
      .then(() => setIsLoading(false));
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

  return isLoading ? (
    <LoadingPage />
  ) : (
    <StyledRecipeOverviewPage data-label="overview-page">
      <StyledSearchBox placeholder="Search for a recipe..." onChange={handleSearch} />
      <StyledRecipeResults>{recipeElements}</StyledRecipeResults>
    </StyledRecipeOverviewPage>
  );
}
