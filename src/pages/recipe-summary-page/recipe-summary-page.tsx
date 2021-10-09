import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import type { IRouteParams } from 'src/models-and-constants/IRouteParams';
import MetaInfoBlock from '../../components/recipe-summary-page/recipe-info-block/meta-info-block';
import IngredientsBlock from '../../components/recipe-summary-page/recipe-ingredients-block/ingredients-block';
import InstructionsBlock from '../../components/recipe-summary-page/recipe-instructions-block/instructions-block';
import type { IRecipe } from '../../models-and-constants/IRecipe';
import PhotoCard from '../../components/recipe-summary-page/recipe-photo-card/photo-card';
import { StyledActionButton, StyledPage } from '../../components/shared-styles/shared-styles';
import { deleteSingleRecipe, getSingleRecipe, getUserRecipes } from '../../gateways/night-potato-api-gateway';
import { FirebaseContext } from '../../contexts/firebase-auth-context';
import { EditButton } from '../../components/recipe-summary-page/recipe-edit-button/recipe-edit-button';
import { LoadingPage } from '../loading-page/loading-page';
import { colors } from '../../styles/potato-styles';
import { SaveButton } from '../../components/recipe-create-edit-page/save-button/save-button';

export default function RecipeSummaryPage() {
  let { recipeId } = useParams<IRouteParams>();
  const [recipe, setRecipe] = useState<IRecipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRecipeOwner, setIsRecipeOwner] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const { user, getAuthToken } = useContext(FirebaseContext);
  const history = useHistory();

  useEffect(() => {
    if (recipeId) {
      getSingleRecipe(recipeId)
        .then(async (response) => {
          setRecipe(response.data.recipe);
          const isRecipeOwner = await isUserRecipeOwner();
          setIsRecipeOwner(isRecipeOwner);
        })
        .then(() => setIsLoading(false))
        .catch((error) => {
          // TODO: toastMessage
          console.log(error);
        });
    }
    //TODO: toastMessage
  }, [user]);

  async function isUserRecipeOwner(): Promise<boolean> {
    if (user) {
      const userRecipes = await getUserRecipes(user.uid);
      const allRecipeIds = userRecipes.data.flatMap((recipe) => recipe.recipe.recipeId);
      return allRecipeIds.includes(recipeId);
    }
    return false;
  }

  const handlePortionsChange = (action: string) => {
    if (!recipe) return;
    let newPortions = recipe.metaInfo.portions;
    action === '+' ? newPortions++ : newPortions--;
    if (newPortions === 0) return;

    recalculateIngredientAmounts(newPortions);
    setRecipe({ ...recipe, metaInfo: { ...recipe.metaInfo, portions: newPortions } });
  };

  const recalculateIngredientAmounts = (newPortions: number) => {
    if (!recipe) return;
    recipe.ingredients.forEach((i) => (i.amount = (i.amount / recipe.metaInfo.portions) * newPortions));
  };

  async function handleDeleteRecipe() {
    setIsDeleting(true);
    if (recipeId && user) {
      const authToken = await getAuthToken();
      await deleteSingleRecipe(authToken, user.uid, recipeId);
      setIsDeleting(false);
      history.push(`/`);
    } else {
      // toast message
      console.log('DELETE FAILED');
      setIsDeleting(false);
    }
  }

  if (!recipe) return <StyledPage data-testid="empty-summary-page" />;

  return isLoading ? (
    <LoadingPage />
  ) : (
    <StyledPage data-testid="summary-page">
      <MetaInfoBlock recipeMetaInfo={recipe.metaInfo} onChangePortions={handlePortionsChange} />
      {recipe.metaInfo.imgUrl ? <PhotoCard data-testid="photo-carousel" imgUrl={recipe.metaInfo.imgUrl} /> : null}
      <IngredientsBlock data-testid="ingredients-block" ingredients={recipe.ingredients} equipment={recipe.equipment} />
      <InstructionsBlock data-testid="instructions-block" instructions={recipe.instructions} />
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        {isRecipeOwner ? (
          <>
            <StyledActionButton
              onClick={() => handleDeleteRecipe()}
              backgroundColor={colors.danger}
              textColor={colors.white}
              hoverColor={colors.dangerHover}
            >
              {isDeleting ? 'Deleting' : 'Delete recipe 🗑️'}
            </StyledActionButton>
            <EditButton onEditButtonClick={() => history.push(`/edit/${recipeId}`)} />
          </>
        ) : null}
      </div>
    </StyledPage>
  );
}
