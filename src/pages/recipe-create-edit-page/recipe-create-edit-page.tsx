import React, { useContext, useEffect, useState } from 'react';
import { RecipeNameInputField } from '../../components/recipe-create-edit-page/recipe-name-input-field/recipe-name-input-field';
import { FirebaseContext } from '../../contexts/firebase-auth-context';
import { Redirect, useParams } from 'react-router-dom';
import { CreateIngredientsCardMobile } from '../../components/recipe-create-edit-page/create-ingredients-card/mobile/create-ingredients-card-mobile';
import { CreateIngredientsCard } from '../../components/recipe-create-edit-page/create-ingredients-card/desktop/create-ingredients-card';
import { CreateEquipmentCard } from '../../components/recipe-create-edit-page/create-equipment-card/create-equipment-card';
import { CreateInstructionsCard } from '../../components/recipe-create-edit-page/create-instructions-card/create-instructions-card';
import { PhotoUpload } from '../../components/recipe-create-edit-page/photo-upload/photo-upload';
import { MetaInfoCard } from '../../components/recipe-create-edit-page/create-meta-info-card/meta-info-card';
import { SaveButton } from '../../components/recipe-create-edit-page/save-button/save-button';
import { StyledPage } from '../../components/shared-styles/shared-styles';
import { IEquipment, IIngredient, IRecipe, IRecipeMetaInfo } from '../../models-and-constants/IRecipe';
import { generate } from 'shortid';
import { IRouteParams } from '../../models-and-constants/IRouteParams';
import { brazilianPudding } from '../../testRecipes';
import { IRecipePostRequest } from '../../models-and-constants/IRecipePostRequest';
import { postRecipe } from '../../gateways/night-potato-api-gateway';

const mobile = window.innerWidth < 500;

const initialRecipe: IRecipe = {
  recipeId: generate(),
  metaInfo: {
    name: '',
    imgUrls: [],
    portions: 0,
    kcalPerPortion: 0,
    labels: [],
    prepTimeInMinutes: 0,
  },
  instructions: '',
  ingredients: mobile ? [] : [{ ingredientId: generate(), amount: 0, measurement: '', name: '' }],
  equipment: [{ equipmentId: generate(), name: '' }],
};

export function RecipeCreateEditPage() {
  let { recipeId } = useParams<IRouteParams>();
  const { isLoggingIn, user, getAuthToken } = useContext(FirebaseContext);

  const [recipe, setRecipe] = useState<IRecipe>(initialRecipe);
  const [recipeNameHasError, setRecipeNameHasError] = useState<boolean>(false);
  const [ingredientWithError, setIngredientWithError] = useState<string[]>([]);
  const [instructionsHaveError, setInstructionsHaveError] = useState<boolean>(false);
  const [metaInfoHasError, setMetaInfoHasError] = useState<boolean>(false);
  const [equipmentErrorReset, setEquipmentErrorReset] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<string>('');
  const [isSaving, setIsSaving] = useState<boolean>(false);

  useEffect(() => {
    if (recipeId) {
      // Retrieve recipe from firebase
      setRecipe(brazilianPudding);
    } else {
      setRecipe(initialRecipe);
    }
    getAuthToken().then((token) => setAuthToken(token));
  }, [recipeId]);

  function isRecipeValid() {
    const hasRecipeName = recipe.metaInfo.name;
    const incompleteIngredients = recipe.ingredients.filter((i) => !i.name || !i.amount);
    const incompleteIngredientIds = incompleteIngredients.flatMap((i) => i.ingredientId);
    const metaInfoIsValid = recipe.metaInfo.prepTimeInMinutes && recipe.metaInfo.portions;

    if (!hasRecipeName) setRecipeNameHasError(true);
    if (incompleteIngredients) setIngredientWithError(incompleteIngredientIds);
    setInstructionsHaveError(!recipe.instructions);
    setMetaInfoHasError(metaInfoHasError);

    return hasRecipeName && !incompleteIngredients.length && recipe.instructions && metaInfoIsValid;
  }

  async function handleCreateRecipe() {
    setEquipmentErrorReset(true);
    setIsSaving(true);
    if (isRecipeValid() && user) {
      const requestBody: IRecipePostRequest = { recipe: recipe };
      await postRecipe(authToken, user.uid, requestBody);
      setIsSaving(false);
    } else {
      // toast message
      console.log('INVALID');
      setIsSaving(false);
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

  function handleEquipmentChange(equipment: IEquipment[]) {
    setRecipe({ ...recipe, equipment: equipment });
  }

  function handleMetaInfoChange(metaInfo: IRecipeMetaInfo) {
    setMetaInfoHasError(!recipe.metaInfo.prepTimeInMinutes || !recipe.metaInfo.portions);
    setRecipe({ ...recipe, metaInfo: metaInfo });
  }

  if (!isLoggingIn && !user) return <Redirect to="/" />;

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
      <CreateEquipmentCard
        equipment={recipe.equipment}
        onEquipmentChange={handleEquipmentChange}
        equipmentErrorReset={equipmentErrorReset}
      />
      <CreateInstructionsCard
        instructions={recipe.instructions}
        onInstructionsChange={(instructions) => setRecipe({ ...recipe, instructions: instructions })}
        instructionsHaveError={instructionsHaveError}
      />
      <PhotoUpload
        image={recipe.metaInfo.imgUrls[0]}
        onImageChange={(imgString) =>
          setRecipe({
            ...recipe,
            metaInfo: { ...recipe.metaInfo, imgUrls: [imgString] },
          })
        }
      />
      <MetaInfoCard metaInfo={recipe.metaInfo} onMetaInfoChange={handleMetaInfoChange} metaInfoHasError={metaInfoHasError} />
      <SaveButton onSaveButtonClick={() => handleCreateRecipe()} existingRecipe={!!recipeId} />
    </StyledPage>
  );
}
