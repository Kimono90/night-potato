import React from 'react';
import type { IIngredient } from '../../models-and-constants/IRecipe';

type Props = {
  ingredients: IIngredient[]
}

export default function RecipeIngredientsBlock({ingredients}: Props) {

  return (
    <div>INGREDIENTS</div>
  )
}