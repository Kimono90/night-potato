import React, { useContext, useEffect, useState } from 'react';
import { IRecipe } from '../../models-and-constants/IRecipe';
import { getUserRecipes } from '../../gateways/night-potato-api-gateway';
import { LoadingPage } from '../loading-page/loading-page';
import { StyledRecipeOverviewPage, StyledRecipeResults } from '../recipe-overview-page/recipe-overview-page.styles';
import OverviewCard from '../../components/recipe-overview-page/recipe-overview-card/overview-card';
import { Redirect } from 'react-router-dom';
import { FirebaseContext } from '../../contexts/firebase-auth-context';
import { StyledPageTitle } from '../../components/shared-styles/shared-styles';

export default function MyRecipesPage() {
  const { isLoggingIn, user } = useContext(FirebaseContext);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (user) {
      getUserRecipes(user.uid)
        .then((result) => {
          const recipes = result.data.map((item) => item.recipe);
          setRecipes(recipes);
        })
        .then(() => setIsLoading(false))
        .catch((error) => {
          //TODO: toast message
          console.log(error);
        });
    }
  }, [user]);

  const recipeElements = recipes.map((r) => <OverviewCard key={r.recipeId} recipeId={r.recipeId} recipeInfo={r.metaInfo} />);
  const displayName = user ? `${user.displayName}’s` : 'your';

  if (!isLoggingIn && !user) return <Redirect to="/" />;

  return isLoading ? (
    <LoadingPage />
  ) : (
    <StyledRecipeOverviewPage data-label="overview-page">
      <StyledPageTitle>{displayName} recipes</StyledPageTitle>
      <StyledRecipeResults>{recipeElements}</StyledRecipeResults>
    </StyledRecipeOverviewPage>
  );
}
