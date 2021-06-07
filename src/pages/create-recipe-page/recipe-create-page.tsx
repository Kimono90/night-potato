import { StyledSingleRecipePage } from '../recipe-summary-page/recipe-summary-page.styles';
import React, { useContext, useState } from 'react';
import { RecipeNameInputField } from '../../components/recipe-create-page/recipe-name-input-field/recipe-name-input-field';
import { FirebaseContext } from '../../contexts/firebase-auth-context';
import { Redirect } from 'react-router-dom';
import { CreateIngredientsCardMobile } from '../../components/recipe-create-page/create-ingredients-card/mobile/create-ingredients-card-mobile';
import { CreateIngredientsCard } from '../../components/recipe-create-page/create-ingredients-card/desktop/create-ingredients-card';
import { CreateEquipmentCard } from '../../components/recipe-create-page/create-equipment-card/create-equipment-card';
import { PhotoUpload } from '../../components/recipe-create-page/photo-upload/PhotoUpload';

export function RecipeCreatePage() {
  const [recipeNameHasError, setRecipeNameHasError] = useState<boolean>();
  const firebaseContext = useContext(FirebaseContext);
  const isLoggedIn = firebaseContext.user;
  const mobile = window.innerWidth < 500;

  if (!isLoggedIn) return <Redirect to="" />;

  return (
    <StyledSingleRecipePage data-label="create-recipe-page">
      <RecipeNameInputField onRecipeNameHasError={setRecipeNameHasError} />
      {mobile ? <CreateIngredientsCardMobile /> : <CreateIngredientsCard />}
      <CreateEquipmentCard />
      <PhotoUpload />
    </StyledSingleRecipePage>
  );
}
