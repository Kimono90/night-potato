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
import { IIngredient, IRecipe } from '../../models-and-constants/IRecipe';
import { generate } from 'shortid';

const mobile = window.innerWidth < 500;

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
  ingredients: mobile ? [] : [{ id: generate(), amount: 0, measurement: '', name: '' }],
  equipment: [],
};

export function RecipeCreatePage() {
  const { isLoggingIn, user } = useContext(FirebaseContext);

  const [recipe, setRecipe] = useState<IRecipe>(initialRecipe);

  const [recipeNameHasError, setRecipeNameHasError] = useState<boolean>(false);
  const [ingredientWithError, setIngredientWithError] = useState<string[]>([]);
  const [imgUrl, setImgUrl] = useState<string>();

  if (!isLoggingIn && !user) return <Redirect to="/" />;

  console.log('RECEPT', recipe);

  function isRecipeValid() {
    const hasRecipeName = recipe.metaInfo.name;
    const incompleteIngredients = recipe.ingredients.filter((i) => !i.name || !i.amount);
    const incompleteIngredientIds = incompleteIngredients.flatMap((i) => i.id);

    if (!hasRecipeName) setRecipeNameHasError(true);
    if (incompleteIngredients) setIngredientWithError(incompleteIngredientIds);

    return hasRecipeName || !incompleteIngredients;
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

  function handleIngredientsChange(ingredients: IIngredient[]) {
    setIngredientWithError([]);
    setRecipe({ ...recipe, ingredients: ingredients });
  }

  return (
    <StyledPage data-label="create-recipe-page">
      <RecipeNameInputField
        recipeName={recipe.metaInfo.name}
        onRecipeNameChange={handleRecipeNameChange}
        recipeNameHasError={recipeNameHasError}
      />
      {mobile ? (
        <CreateIngredientsCardMobile ingredients={recipe.ingredients} onIngredientsChange={handleIngredientsChange} />
      ) : (
        <CreateIngredientsCard
          ingredients={recipe.ingredients}
          onIngredientsChange={handleIngredientsChange}
          ingredientsWithError={ingredientWithError}
        />
      )}
      <CreateEquipmentCard />
      <CreateInstructionsCard />
      <PhotoUpload onFileSelection={(imgString) => setImgUrl(imgString)} />
      <MetaInfoCard />
      <SaveButton onSaveButtonClick={() => handleCreateRecipe()} />
    </StyledPage>
  );
}
