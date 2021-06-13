import React, { useContext, useState } from 'react';
import { RecipeNameInputField } from '../../components/recipe-create-page/recipe-name-input-field/recipe-name-input-field';
import { FirebaseContext } from '../../contexts/firebase-auth-context';
import { Redirect } from 'react-router-dom';
import { CreateIngredientsCardMobile } from '../../components/recipe-create-page/create-ingredients-card/mobile/create-ingredients-card-mobile';
import { CreateIngredientsCard } from '../../components/recipe-create-page/create-ingredients-card/desktop/create-ingredients-card';
import { CreateEquipmentCard } from '../../components/recipe-create-page/create-equipment-card/create-equipment-card';
import { CreateInstructionsCard } from '../../components/recipe-create-page/create-instructions-card/desktop/create-instructions-card';
import { PhotoUpload } from '../../components/recipe-create-page/photo-upload/photo-upload';
import { MetaInfoCard } from '../../components/recipe-create-page/create-meta-info-card/meta-info-card';
import { SaveButton } from '../../components/recipe-create-page/save-button/save-button';
import { StyledPage } from '../../components/shared-styles/shared-styles';

export function RecipeCreatePage() {
  const [recipeNameHasError, setRecipeNameHasError] = useState<boolean>();
  const [imgUrl, setImgUrl] = useState<string>();
  const { isLoggingIn, user } = useContext(FirebaseContext);
  const mobile = window.innerWidth < 500;

  if (!isLoggingIn && !user) return <Redirect to="/" />;

  return (
    <StyledPage data-label="create-recipe-page">
      <RecipeNameInputField onRecipeNameHasError={setRecipeNameHasError} />
      {mobile ? <CreateIngredientsCardMobile /> : <CreateIngredientsCard />}
      <CreateEquipmentCard />
      <CreateInstructionsCard />
      <PhotoUpload onFileSelection={(imgString) => setImgUrl(imgString)} />
      <MetaInfoCard />
      <SaveButton onSaveButtonClick={() => alert('Still working on the save functionality :)!')} />
    </StyledPage>
  );
}
