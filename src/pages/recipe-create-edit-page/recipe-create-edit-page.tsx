import React, { useContext, useEffect, useState } from 'react';
import { RecipeNameInputField } from '../../components/recipe-create-edit-page/recipe-name-input-field/recipe-name-input-field';
import { FirebaseContext } from '../../contexts/firebase-auth-context';
import { Redirect, useHistory, useParams } from 'react-router-dom';
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
import { IRecipeRequest } from '../../models-and-constants/IRecipeRequest';
import { getSingleRecipe, postRecipe, putRecipe } from '../../gateways/night-potato-api-gateway';
import { LoadingPage } from '../loading-page/loading-page';
import { toast } from 'react-toastify';

const mobile = window.innerWidth < 500;

export function RecipeCreateEditPage() {
  const initialRecipe: IRecipe = {
    recipeId: generate(),
    metaInfo: {
      name: '',
      imgUrl: '',
      portions: undefined,
      kcalPerPortion: undefined,
      labels: [],
      prepTimeInMinutes: undefined,
    },
    instructions: '',
    ingredients: mobile ? [] : [{ ingredientId: generate(), amount: undefined, measurement: '', name: '' }],
    equipment: [{ equipmentId: generate(), name: '' }],
  };

  let { recipeId } = useParams<IRouteParams>();
  const { isLoggingIn, user, getAuthToken } = useContext(FirebaseContext);
  const history = useHistory();

  const [recipe, setRecipe] = useState<IRecipe>(initialRecipe);
  const [recipeNameHasError, setRecipeNameHasError] = useState<boolean>(false);
  const [ingredientWithError, setIngredientWithError] = useState<string[]>([]);
  const [instructionsHaveError, setInstructionsHaveError] = useState<boolean>(false);
  const [metaInfoHasError, setMetaInfoHasError] = useState<boolean>(false);
  const [equipmentErrorReset, setEquipmentErrorReset] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [encodedImage, setEncodedImage] = useState<string>('');

  useEffect(() => {
    if (recipeId) {
      getSingleRecipe(recipeId)
        .then((response) => {
          if (!response.data.recipe) {
            toast('Apologies. I was unable to gather the information on this recipe. I will bring you back to the homepage');
            setTimeout(() => history.push('/'), 5000);
          }
          setRecipe(response.data.recipe);
        })
        .then(() => setIsLoading(false));
    } else {
      setRecipe(initialRecipe);
      setIsLoading(false);
    }
  }, []);

  function isRecipeValid() {
    const hasRecipeName = recipe.metaInfo.name;
    const incompleteIngredients = recipe.ingredients.filter((i) => !i.name || !i.amount);
    const incompleteIngredientIds = incompleteIngredients.map((i) => i.ingredientId);
    const metaInfoIsValid = recipe.metaInfo.prepTimeInMinutes && recipe.metaInfo.portions;

    if (!hasRecipeName) setRecipeNameHasError(true);
    if (incompleteIngredients) setIngredientWithError(incompleteIngredientIds);
    setInstructionsHaveError(!recipe.instructions);
    setMetaInfoHasError(!metaInfoIsValid);

    return hasRecipeName && !incompleteIngredients.length && recipe.instructions && metaInfoIsValid;
  }

  async function handleCreateRecipe() {
    setEquipmentErrorReset(true);
    setIsSaving(true);
    if (isRecipeValid() && user) {
      const requestBody: IRecipeRequest = { recipe: recipe, imageFile: encodedImage };
      const authToken = await getAuthToken();
      const response = await postRecipe(authToken, user.uid, requestBody);
      setIsSaving(false);
      toast(`Looks delicious! Your recipe for ${response.data.recipe.metaInfo.name} was successfully created!`);
      history.push(`/summary/${response.data.recipe.recipeId}`);
    } else {
      toast('Your recipe does not seem to be complete just yet. Please fill in all mandatory fields :)');
      setIsSaving(false);
    }
  }

  async function handleEditRecipe() {
    setEquipmentErrorReset(true);
    setIsSaving(true);
    if (isRecipeValid() && user) {
      const requestBody: IRecipeRequest = { recipe: recipe, imageFile: encodedImage };
      const authToken = await getAuthToken();
      const response = await putRecipe(authToken, user.uid, requestBody);
      setIsSaving(false);
      toast(`Yummy! Your recipe for ${response.data.recipe.metaInfo.name} was successfully saved!`);
      history.push(`/summary/${response.data.recipe.recipeId}`);
    } else {
      toast('Your recipe does not seem to be complete just yet. Please fill in all mandatory fields :)');
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

  return isLoading ? (
    <LoadingPage />
  ) : (
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
      <PhotoUpload image={recipe.metaInfo.imgUrl} onImageChange={setEncodedImage} />
      <MetaInfoCard metaInfo={recipe.metaInfo} onMetaInfoChange={handleMetaInfoChange} metaInfoHasError={metaInfoHasError} />
      <SaveButton
        onSaveButtonClick={(existingRecipe) => (existingRecipe ? handleEditRecipe() : handleCreateRecipe())}
        existingRecipe={!!recipeId}
        isLoading={isSaving}
      />
    </StyledPage>
  );
}
