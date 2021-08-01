import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import type { IRouteParams } from 'src/models-and-constants/IRouteParams';
import MetaInfoBlock from '../../components/recipe-summary-page/recipe-info-block/meta-info-block';
import IngredientsBlock from '../../components/recipe-summary-page/recipe-ingredients-block/ingredients-block';
import InstructionsBlock from '../../components/recipe-summary-page/recipe-instructions-block/instructions-block';
import type { IRecipe } from '../../models-and-constants/IRecipe';
import PhotoCard from '../../components/recipe-summary-page/recipe-photo-card/photo-card';
import { StyledPage } from '../../components/shared-styles/shared-styles';
import { getSingleRecipe, getUserRecipes } from '../../gateways/night-potato-api-gateway';
import { FirebaseContext } from '../../contexts/firebase-auth-context';
import { EditButton } from '../../components/recipe-summary-page/recipe-edit-button/recipe-edit-button';

export default function RecipeSummaryPage() {
  let { recipeId } = useParams<IRouteParams>();
  const [recipe, setRecipe] = useState<IRecipe | null>(null);
  const [isRecipeOwner, setIsRecipeOwner] = useState<boolean>(false);
  const { user } = useContext(FirebaseContext);
  const history = useHistory();

  useEffect(() => {
    if (recipeId) {
      getSingleRecipe(recipeId)
        .then(async (response) => {
          setRecipe(response.data[0].recipe);
          const isRecipeOwner = await isUserRecipeOwner();
          setIsRecipeOwner(isRecipeOwner);
        })
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

  if (!recipe) return <StyledPage data-testid="empty-summary-page" />;

  return (
    <StyledPage data-testid="summary-page">
      <MetaInfoBlock recipeMetaInfo={recipe.metaInfo} onChangePortions={handlePortionsChange} />
      {recipe.metaInfo.imgUrl ? <PhotoCard data-testid="photo-carousel" imgUrl={recipe.metaInfo.imgUrl} /> : null}
      <IngredientsBlock data-testid="ingredients-block" ingredients={recipe.ingredients} equipment={recipe.equipment} />
      <InstructionsBlock data-testid="instructions-block" instructions={recipe.instructions} />
      {isRecipeOwner ? <EditButton onEditButtonClick={() => history.push(`/edit/${recipeId}`)} /> : null}
    </StyledPage>
  );
}
