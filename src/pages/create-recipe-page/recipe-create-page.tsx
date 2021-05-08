import { StyledSingleRecipePage } from '../recipe-summary-page/recipe-summary-page.styles';
import React, { useContext, useState } from 'react';
import { RecipeNameInputField } from '../../components/recipe-create-page/recipe-name-input-field/recipe-name-input-field';
import { IngredientsInputCard } from '../../components/recipe-create-page/ingredients-input-card/ingredients-input-card';
import { FirebaseContext } from '../../contexts/firebase-auth-context';
import { Redirect } from 'react-router-dom';

export function RecipeCreatePage() {
  const [recipeNameHasError, setRecipeNameHasError] = useState<boolean>();
  const firebaseContext = useContext(FirebaseContext);
  const isLoggedIn = firebaseContext.user;

  if (!isLoggedIn) return <Redirect to="" />;

  return (
    <StyledSingleRecipePage data-label="create-recipe-page">
      <RecipeNameInputField onRecipeNameHasError={setRecipeNameHasError} />
      <IngredientsInputCard />
    </StyledSingleRecipePage>
  );
}
