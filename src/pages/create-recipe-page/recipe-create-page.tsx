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
import { IRecipe } from '../../models-and-constants/IRecipe';
import { generate } from 'shortid';

const initialRecipe: IRecipe = {
  id: generate(),
  metaInfo: {
    name: '',
    imgUrls: [],
    portions: 0,
    kcalPerPortion: 0,
    labels: [],
    prepTimeInMinutes: 0,
  },
  instructions: '',
  ingredients: [],
  equipment: [],
};

export function RecipeCreatePage() {
  const { isLoggingIn, user } = useContext(FirebaseContext);
  const mobile = window.innerWidth < 500;

  const [recipe, setRecipe] = useState<IRecipe>(initialRecipe);

  const [recipeNameHasError, setRecipeNameHasError] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>();

  if (!isLoggingIn && !user) return <Redirect to="/" />;

  console.log('RECEPT', recipe);

  function isRecipeValid() {
    const hasRecipeName = recipe.metaInfo.name;
    if (!hasRecipeName) setRecipeNameHasError(true);

    return hasRecipeName;
  }

  function handleCreateRecipe() {
    if (isRecipeValid()) {
      // POST to firebase
    } else {
      // toast message
    }
  }

  function handleRecipeNameChange(name: string) {
    setRecipeNameHasError(false);
    setRecipe({ ...recipe, metaInfo: { ...recipe.metaInfo, name: name } });
  }

  return (
    <StyledPage data-label="create-recipe-page">
      <RecipeNameInputField
        recipeName={recipe.metaInfo.name}
        onRecipeNameChange={(name) => handleRecipeNameChange(name)}
        recipeNameHasError={recipeNameHasError}
      />
      {mobile ? <CreateIngredientsCardMobile /> : <CreateIngredientsCard />}
      <CreateEquipmentCard />
      <CreateInstructionsCard />
      <PhotoUpload onFileSelection={(imgString) => setImgUrl(imgString)} />
      <MetaInfoCard />
      <SaveButton onSaveButtonClick={() => handleCreateRecipe()} />
    </StyledPage>
  );
}
