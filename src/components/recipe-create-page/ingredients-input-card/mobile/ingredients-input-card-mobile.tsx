import React, { ReactElement, useState } from 'react';
import type { IIngredient } from '../../../../models-and-constants/IRecipe';
import { CreateItemsCard } from '../../create-items-card/create-items-card';
import { AddIngredientModal } from './add-ingredient-modal';
import { EditableIngredientMobile } from './editable-ingredient-mobile';
import { StyledAddButton } from '../../../shared-styles/shared-styles';

export function IngredientsInputCardMobile(): ReactElement {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const mobile = window.innerWidth < 500;

  const handleAddIngredient = (newIngredient: IIngredient) => {
    console.log('adding ingredient');
    setIngredients([...ingredients, newIngredient]);
  };

  const handleRemoveIngredient = (ingredientId: string) => {
    const newIngredients = ingredients.filter((i: IIngredient) => i.id !== ingredientId);
    setIngredients(newIngredients);
  };

  const getIngredients = () => {
    const ingredientsToRender = ingredients.map((i: IIngredient) => (
      <EditableIngredientMobile
        key={i.id}
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
        <AddIngredientModal
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
