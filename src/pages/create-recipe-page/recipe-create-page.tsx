import React, { useContext, useEffect, useState } from 'react';
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
import { IEquipment, IIngredient, IRecipe, IRecipeMetaInfo } from '../../models-and-constants/IRecipe';
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
  equipment: [{ id: generate(), name: '' }],
};

export function RecipeCreatePage() {
  const { isLoggingIn, user } = useContext(FirebaseContext);

  const [recipe, setRecipe] = useState<IRecipe>(initialRecipe);

  const [recipeNameHasError, setRecipeNameHasError] = useState<boolean>(false);
  const [ingredientWithError, setIngredientWithError] = useState<string[]>([]);
  const [instructionsHaveError, setInstructionsHaveError] = useState<boolean>(false);
  const [metaInfoHasError, setMetaInfoHasError] = useState<boolean>(false);
  const [equipmentErrorReset, setEquipmentErrorReset] = useState<boolean>(false);

  function isRecipeValid() {
    const hasRecipeName = recipe.metaInfo.name;
    const incompleteIngredients = recipe.ingredients.filter((i) => !i.name || !i.amount);
    const incompleteIngredientIds = incompleteIngredients.flatMap((i) => i.id);
    const metaInfoIsValid = recipe.metaInfo.prepTimeInMinutes && recipe.metaInfo.portions;

    if (!hasRecipeName) setRecipeNameHasError(true);
    if (incompleteIngredients) setIngredientWithError(incompleteIngredientIds);
    setInstructionsHaveError(!recipe.instructions);
    setMetaInfoHasError(metaInfoHasError);

    return hasRecipeName && !incompleteIngredients.length && recipe.instructions && metaInfoIsValid;
  }

  function handleCreateRecipe() {
    setEquipmentErrorReset(true);
    if (isRecipeValid()) {
      console.log('VALID', recipe);
    } else {
      console.log('INVALID', recipe);
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
        onImageChange={(imgString) =>
          setRecipe({
            ...recipe,
            metaInfo: { ...recipe.metaInfo, imgUrls: [imgString] },
          })
        }
      />
      <MetaInfoCard metaInfo={recipe.metaInfo} onMetaInfoChange={handleMetaInfoChange} metaInfoHasError={metaInfoHasError} />
      <SaveButton onSaveButtonClick={() => handleCreateRecipe()} />
    </StyledPage>
  );
}
