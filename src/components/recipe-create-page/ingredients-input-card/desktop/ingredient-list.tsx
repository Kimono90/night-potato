<<<<<<< Updated upstream:src/components/recipe-create-page/ingredients-input-card/ingredient-list.tsx
import React from 'react';
import type { ReactElement } from 'react';
import type { IIngredient } from '../../../models-and-constants/IRecipe';
=======
import React, { ReactElement } from 'react';
import type { IIngredient } from '../../../../models-and-constants/IRecipe';
>>>>>>> Stashed changes:src/components/recipe-create-page/ingredients-input-card/desktop/ingredient-list.tsx
import { EditableIngredient } from './editable-ingredient';

type Props = {
  currentIngredients: IIngredient[];
  onIngredientChange: (ingredient: IIngredient) => void;
  onIngredientRemove: (id: string) => void;
  onIngredientAdd: () => void;
};

export function IngredientList({
  currentIngredients,
  onIngredientChange,
  onIngredientRemove,
  onIngredientAdd,
}: Props): ReactElement {
  const allIngredients = currentIngredients.map((i, index) => (
    <EditableIngredient
      key={i.id}
      currentIngredient={i}
      allIngredients={currentIngredients}
      onIngredientChange={onIngredientChange}
      onMinusButtonClick={onIngredientRemove}
      onPlusButtonClick={onIngredientAdd}
    />
  ));

  return <>{allIngredients}</>;
}
