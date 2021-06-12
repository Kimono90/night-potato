import React from 'react';
import { faBacon, faBreadSlice, faEgg, faFish, faLeaf, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { RecipeLabel } from './recipe-label';
import type { ReactElement } from 'react';
import { labels } from './label-constants';

export const LabelDictionary = new Map<string, ReactElement>([
  [labels.vegetarian, <RecipeLabel key="vegetarian" icon={faLeaf} text="Vegetarian" backgroundColor="mediumspringgreen" />],
  [labels.vegan, <RecipeLabel key="vegan" icon={faSeedling} text="Vegan" backgroundColor="mediumseagreen" />],
  [labels.glutenFree, <RecipeLabel key="gluten" icon={faBreadSlice} text="Gluten free" backgroundColor="sandybrown" />],
  [labels.dairyFree, <RecipeLabel key="dairy" icon={faEgg} text="Dairy free" backgroundColor="deepskyblue" />],
]);

export const ActiveLabelDictionary = new Map<string, ReactElement>([
  [
    labels.vegetarian,
    <RecipeLabel key="vegetarian" icon={faLeaf} text="Vegetarian" backgroundColor="mediumspringgreen" clickAble={true} />,
  ],
  [
    labels.vegan,
    <RecipeLabel key="vegan" icon={faSeedling} text="Vegan" backgroundColor="mediumseagreen" clickAble={true} />,
  ],
  [
    labels.glutenFree,
    <RecipeLabel key="gluten" icon={faBreadSlice} text="Gluten free" backgroundColor="sandybrown" clickAble={true} />,
  ],
  [
    labels.dairyFree,
    <RecipeLabel key="dairy" icon={faEgg} text="Dairy free" backgroundColor="deepskyblue" clickAble={true} />,
  ],
]);
