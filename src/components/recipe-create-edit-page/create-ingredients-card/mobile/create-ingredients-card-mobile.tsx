import React, { ReactElement, useState } from 'react';
import type { IIngredient } from '../../../../models-and-constants/IRecipe';
import { CreateItemsCard } from '../../template-components/create-items-card/create-items-card';
import { IngredientAddModal } from './ingredient-add-modal';
import { EditableIngredientMobile } from './editable-ingredient-mobile';
import { StyledAddButton } from '../../../shared-styles/shared-styles';

type Props = {
  ingredients: IIngredient[];
  onIngredientsChange: (ingredients: IIngredient[]) => void;
};

export function CreateIngredientsCardMobile({ ingredients, onIngredientsChange }: Props): ReactElement {
  const [showModal, setShowModal] = useState<boolean>(false);
  const mobile = window.innerWidth < 500;

  const handleAddIngredient = (newIngredient: IIngredient) => {
    onIngredientsChange([...ingredients, newIngredient]);
  };

  const handleRemoveIngredient = (ingredientId: string) => {
    const newIngredients = ingredients.filter((i: IIngredient) => i.ingredientId !== ingredientId);
    onIngredientsChange(newIngredients);
  };

  const getIngredients = () => {
    const ingredientsToRender = ingredients.map((i: IIngredient) => (
      <EditableIngredientMobile
        key={i.ingredientId}
        ingredient={i}
        onRemoveClick={handleRemoveIngredient}
        onIngredientClick={(ingredient) => {
          setShowModal(true);
        }}
      />
    ));
    return (
      <>
        {ingredientsToRender}
        {mobile ? <StyledAddButton onClick={() => setShowModal(true)}>Add</StyledAddButton> : null}
      </>
    );
  };

  return (
    <CreateItemsCard
      cardTitle="Ingredients"
      itemsToRender={getIngredients()}
      mobileInputModal={
        <IngredientAddModal
          showModal={showModal}
          onIngredientAdd={(ingredient) => {
            setShowModal(false);
            handleAddIngredient(ingredient);
          }}
          onBackClick={() => setShowModal(false)}
        />
      }
    />
  );
}
