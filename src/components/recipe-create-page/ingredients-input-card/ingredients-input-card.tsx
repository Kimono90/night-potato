import React, { ReactElement, useState } from 'react';
import { StyledAddButton } from '../../shared-styles/shared-styles';
import type { IIngredient } from '../../../models-and-constants/IRecipe';
import { generate } from 'shortid';
import { EditableIngredient } from './editable-ingredient';
import { CreateItemsCard } from '../create-items-card/create-items-card';
import { EditableIngredientMobile } from './mobile/editable-ingredient-mobile';
import { AddIngredientModal } from './mobile/add-ingredient-modal';

export function IngredientsInputCard(): ReactElement {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const mobile = window.innerWidth < 500;

  const handleAddIngredient = (newIngredient: IIngredient) => {
    if (ingredients.find((i) => i.id === newIngredient.id)) {
      console.log('Change ingredient');
    } else setIngredients([...ingredients, newIngredient]);
  };

  const handleRemoveIngredient = (ingredientId: string) => {
    const newIngredients = ingredients.filter((i: IIngredient) => i.id !== ingredientId);
    setIngredients(newIngredients);
  };

  const renderIngredientsForMobile = (): JSX.Element => {
    const ingredientsToRender = ingredients.map((i: IIngredient) => (
      <EditableIngredientMobile key={i.id} ingredient={i} onRemoveClick={handleRemoveIngredient} />
    ));
    return (
      <>
        {ingredientsToRender}
        {mobile ? <StyledAddButton onClick={() => setShowModal(true)}>Add</StyledAddButton> : null}
      </>
    );
  };

  const renderIngredients = (): JSX.Element[] | JSX.Element => {
    if (mobile) return renderIngredientsForMobile();
    else {
      const emptyIngredient: IIngredient = { id: generate(), amount: 0, measurement: '', productName: '' };
      const ingredientsToRender: IIngredient[] = [...ingredients, emptyIngredient];

      return ingredientsToRender.map((i, index) => (
        <EditableIngredient
          key={i.id}
          currentIngredient={i}
          onIngredientChange={handleAddIngredient}
          onMinusButtonClick={handleRemoveIngredient}
          ingredients={ingredients}
        />
      ));
    }
  };

  return (
    <CreateItemsCard
      cardTitle="Ingredients"
      itemsToRender={renderIngredients()}
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
