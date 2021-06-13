import React from 'react';
import type { ReactElement } from 'react';
import type { IIngredient } from '../../../../models-and-constants/IRecipe';
import { EditableIngredient } from './editable-ingredient';

type Props = {
  currentIngredients: IIngredient[];
  onIngredientChange: (ingredient: IIngredient) => void;
  onIngredientRemove: (id: string) => void;
  onIngredientAdd: () => void;
  ingredientsWithError: string[];
};

export function IngredientList({
  currentIngredients,
  onIngredientChange,
  onIngredientRemove,
  onIngredientAdd,
  ingredientsWithError,
}: Props): ReactElement {
  const allIngredients = currentIngredients.map((i, index) => (
    <EditableIngredient
      key={i.id}
      currentIngredient={i}
      allIngredients={currentIngredients}
      onIngredientChange={onIngredientChange}
      onMinusButtonClick={onIngredientRemove}
      onPlusButtonClick={onIngredientAdd}
      hasError={ingredientsWithError.includes(i.id)}
    />
  ));

  return <>{allIngredients}</>;
}
